/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';




export const ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'App', component: AppComponent },
    { path: 'wizard', component: WizardComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);