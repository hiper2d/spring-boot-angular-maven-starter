import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./layout/home/home.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core.module";
import {LoginModule} from "./login/login.module";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {

}
