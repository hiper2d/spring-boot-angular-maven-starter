import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

export abstract class AbstractService {

  protected constructor(private http: HttpClient) {}

  protected getWithHeaders(url: string, headers: HttpHeaders): Observable<any> {
    return this.http.get(url, {headers: headers});
  }

  protected text(url: string) {
    return this.http.get(url, {responseType: 'text'});
  }
}
