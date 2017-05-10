import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ClarityModule} from 'clarity-angular';

import { AppComponent } from './app.component';

import { QuestionComponent } from './question/question.component';
import { RouterModule } from '@angular/router';
import {ROUTING} from './app.routing';

//try to get routing when clicking on open button
//to open the wizard
// Ryan said not to:  import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  //  WizardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ROUTING,
    ClarityModule.forRoot()
  ],
  providers: [
    //WizardNavigationService

  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
