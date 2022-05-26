import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebApiModule } from "@smart-home/web-api";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    WebApiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
