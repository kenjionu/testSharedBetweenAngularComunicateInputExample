import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsstatusComponent } from './docsstatus/docsstatus.component';
import { DocumentationComponentComponent } from './docsStatus/documentation-component/documentation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsstatusComponent,
    DocumentationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
