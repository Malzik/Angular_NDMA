import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterComponent } from './router.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: AppComponent},
    { path: '**', component: AppComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        RouterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
