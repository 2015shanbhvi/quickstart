import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Wizard } from "clarity-angular/wizard/wizard";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: './app.wizard.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Questionaire';
}

export class WizardAsyncValidation {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild("myForm") formData: any;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        setTimeout(() => {
            if (value.answer === "42") {
                this.wizard.next();
            } else {
                this.errorFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }
}
