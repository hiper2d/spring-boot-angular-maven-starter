import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {LayoutComponent} from "./layout.component";
import {LayoutRouteModule} from "./layout.route-module";

@NgModule({
  imports: [
    SharedModule,
    LayoutRouteModule,
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
