import {Component} from "@angular/core";
import "../assets/reset.css";

@Component({
    selector: 'app',
    template: `
        <nav class="nav">
            <a class="nav__link" routerLink="/home" routerLinkActive="_active">Home</a>
            <a class="nav__link" routerLink="/lazy" routerLinkActive="_active">Lazy</a>
        </nav>

        <router-outlet></router-outlet>
    `
})
export class AppComponent {

}