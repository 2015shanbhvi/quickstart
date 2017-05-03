import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';

//try to get routing when clicking on open button
//to open the wizard
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
