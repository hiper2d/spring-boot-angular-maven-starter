import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EchoService {
    constructor(private http: HttpClient){
    }

    echo(): Observable<string> {
        return this.http.get("/api/echo", {responseType: 'text'});
    }
}
