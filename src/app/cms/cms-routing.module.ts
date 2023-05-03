import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Home1Component } from './pages/home/home.component';
import { FilterComponent } from './pages/filter/filter.component';

const routes: Routes = [
  {path:'cms', component:LayoutComponent, children:[
    {path:'home1', component:Home1Component},
    {path:'filter', component:FilterComponent},
    {path:'', redirectTo:'/home1', pathMatch:'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
