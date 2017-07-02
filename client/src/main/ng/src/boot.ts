import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {LayoutModule} from "./app/layout/layout.module";

if (process.env.ENV === 'production') {
	enableProdMode();
}
platformBrowserDynamic().bootstrapModule(LayoutModule);