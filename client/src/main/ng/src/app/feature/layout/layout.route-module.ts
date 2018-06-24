import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../core/guard/auth.guard";
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
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
