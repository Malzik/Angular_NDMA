import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterComponent } from './router.component';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { ImagelistComponent } from './Components/imagelist/imagelist.component';
import { ImageComponent } from './Components/image/image.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', component: AppComponent},
    { path: '**', component: AppComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        RouterComponent,
        NavbarComponent,
        SearchbarComponent,
        ImagelistComponent,
        ImageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
