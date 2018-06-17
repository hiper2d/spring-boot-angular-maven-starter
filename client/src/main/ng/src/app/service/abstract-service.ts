import {HttpClient} from "@angular/common/http";

export abstract class AbstractService {

  protected constructor(private http: HttpClient) {}

  protected getText(url: string) {
    return this.http.get(url, {responseType: 'text'});
  }
}
