import {Injectable} from "@angular/core";
import {AbstractService} from "./abstract-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends AbstractService {

  constructor(http: HttpClient) {
    super(http);
  }
}
