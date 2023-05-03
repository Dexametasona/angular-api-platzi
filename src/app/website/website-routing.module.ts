import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EccomerceComponent } from './eccomerce/eccomerce.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {path:'', component:EccomerceComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'category/:id', component:CategoryComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
