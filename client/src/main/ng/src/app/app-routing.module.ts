import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
