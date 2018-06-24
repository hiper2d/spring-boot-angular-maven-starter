import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './feature/layout/layout.module';
import {PageNotFoundComponent} from './feature/page-not-found/page-not-found.component';
import {LoginModule} from './feature/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
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
