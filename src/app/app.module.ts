import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlaAngularComponent } from './ola-angular/ola-angular.component';
import { OlaAngularCliComponent } from './ola-angular-cli/ola-angular-cli.component';

@NgModule({
  declarations: [
    OlaAngularComponent,
    AppComponent,
    OlaAngularCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
