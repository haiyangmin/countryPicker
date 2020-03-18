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
    ],
    providers: [CountriesService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
