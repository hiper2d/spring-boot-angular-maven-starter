import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    CommonModule,
    PageNotFoundComponent
  ]
})
export class SharedModule {
}
