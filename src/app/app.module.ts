import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { WebsiteModule } from './website/website.module';
import { CmsModule } from './cms/cms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WebsiteModule,
    CmsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TimeInterceptor, multi:true},
  {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
