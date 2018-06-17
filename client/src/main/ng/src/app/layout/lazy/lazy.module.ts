import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LazyComponent} from "./lazy.component";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
    {path: '', component: LazyComponent},
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [LazyComponent],
    declarations: [LazyComponent]
})
export class LazyModule {}
