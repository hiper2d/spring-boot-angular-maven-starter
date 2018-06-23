import {Component, OnInit} from "@angular/core";
import {EchoService} from "../../../core/service/echo.service";

@Component({
    selector: 'home',
    template: `
        <div>I'm Home</div>
        <div>Echo from server: {{echo}}</div>
    `
})
export class HomeComponent implements OnInit {
    echo = 'nope';

    constructor(private echoService: EchoService) {
    }

    ngOnInit(): void {
        this.echoService.echo().subscribe(result => {
            this.echo = result;
            console.log(result);
        });
    }
}
