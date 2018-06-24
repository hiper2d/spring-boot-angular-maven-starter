import {Component, OnInit} from "@angular/core";
import {EchoService} from "../../../core/service/echo.service";
import {AuthService} from '../../../core/service/auth.service';

@Component({
    selector: 'home',
    template: `
        <div>Hi, {{ username }}</div>
        <div>Echo from server: {{echo}}</div>
    `
})
export class HomeComponent implements OnInit {
    echo = 'nope';
    username = '';

    constructor(
      private echoService: EchoService,
      private authService: AuthService
    ) {
    }

    ngOnInit(): void {
      this.username = this.authService.username;
      this.echoService.echo().subscribe(result => {
          this.echo = result;
      });
    }
}
