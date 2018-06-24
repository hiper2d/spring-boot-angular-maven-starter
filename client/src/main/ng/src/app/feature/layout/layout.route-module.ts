import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../core/guard/auth.guard";
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule', canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRouteModule {
}
