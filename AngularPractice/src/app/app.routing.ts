/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { Question2Component } from './question2/question2.component';
import { SubscriptionComponent } from './subscription/subscription.component';





export const ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'App', component: AppComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'question2', component: Question2Component },
    { path: 'subscription', component: SubscriptionComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
