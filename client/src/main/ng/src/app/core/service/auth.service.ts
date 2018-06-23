import {Injectable} from '@angular/core';
import {AbstractService} from './abstract-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Credentials} from '../../model/credentials.model';
import {Observable} from 'rxjs/internal/Observable';
import {ApiConst} from '../../util/api.const';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  // authenticated = false;
  authenticated = true;

  constructor(http: HttpClient) {
    super(http);
  }

  private static createToken(credentials: Credentials) {
    return {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    };
  }

  authenticate(credentials: Credentials): Observable<any> {
    const headers = new HttpHeaders(credentials ? AuthService.createToken(credentials) : {});
    return this.getWithHeaders(ApiConst.USER, headers).pipe(
      map<any, boolean>(response => !!response['name']),
      tap(response => this.authenticated = response)
    );
  }
}
