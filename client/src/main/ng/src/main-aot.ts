import {platformBrowser} from "@angular/platform-browser";
import {enableProdMode} from "@angular/core";
import {AppModuleNgFactory} from "./app/app.module.ngfactory";

console.log("******************You are in prod mode******************");
enableProdMode();

platformBrowser()
    .bootstrapModuleFactory(<any>AppModuleNgFactory)
    .catch(error=>console.log(error));