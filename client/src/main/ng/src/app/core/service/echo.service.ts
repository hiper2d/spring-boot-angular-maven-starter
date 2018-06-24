import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbstractService} from "./abstract-service";
import {ApiConst} from '../../util/api.const';

@Injectable({
  providedIn: 'root',
})
export class EchoService extends AbstractService {

  constructor(http: HttpClient) {
    super(http)
  }

  echo(): Observable<string> {
    return this.text(ApiConst.ECHO)
  }
}
