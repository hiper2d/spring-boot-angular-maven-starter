import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AbstractService} from "./abstract-service";

@Injectable({
  providedIn: 'root',
})
export class EchoService extends AbstractService {

  constructor(http: HttpClient) {
    super(http)
  }

  echo(): Observable<string> {
    return this.text("/api/echo")
  }
}
