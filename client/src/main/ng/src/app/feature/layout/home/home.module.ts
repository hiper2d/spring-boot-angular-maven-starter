import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../../../shared/shared.module";

const routes: Routes = [
    {path: '', component: HomeComponent},
];

@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      HomeComponent
    ],
    declarations: [
      HomeComponent
    ]
})
export class HomeModule {

}
