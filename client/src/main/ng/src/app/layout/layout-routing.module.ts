import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BlogComponent} from "./blog/blog.component";

const layoutRoutes: Routes = [
	{path: '', component: BlogComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(layoutRoutes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {
	
}
