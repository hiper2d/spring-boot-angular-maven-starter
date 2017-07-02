import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LayoutComponent} from "./layout.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import {BlogComponent} from "./blog/blog.component";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		LayoutRoutingModule
	],
	declarations: [
		BlogComponent,
		LayoutComponent
	],
	bootstrap: [LayoutComponent]
})
export class LayoutModule {
	
}