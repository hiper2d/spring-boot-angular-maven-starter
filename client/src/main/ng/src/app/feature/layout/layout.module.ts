import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {LayoutComponent} from "./layout.component";
import {LayoutRouteModule} from "./layout.route-module";
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    LayoutRouteModule,
  ],
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
