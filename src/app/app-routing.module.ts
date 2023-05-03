import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'site', loadChildren:()=>import('./website/website.module').then(route=>route.WebsiteModule)},
  {path:'cms', loadChildren:()=>import('./cms/cms.module').then(route=>route.CmsModule)},
  {path:"", redirectTo:'/site', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
