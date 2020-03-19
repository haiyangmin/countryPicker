import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CountryPickerComponent } from './components/country-picker/country-picker.component';

import { CountriesService } from './services/countries.service';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutes,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        DropdownModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        CountryPickerComponent,
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent,
    ],
    providers: [CountriesService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
