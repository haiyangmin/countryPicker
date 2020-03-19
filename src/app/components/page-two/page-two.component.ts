import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {CountriesService} from '../../services/countries.service';
import {COUNTRIES_CONFIG1} from '../../config/countriesConfig';

@Component({
    selector: 'app-page-two',
    templateUrl: './page-two.component.html',
    styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

    selectedCountry = 'Argentina';
    countries: SelectItem[];

    constructor(private service: CountriesService) {
        this.countries = service.getCountriesByConfig(COUNTRIES_CONFIG1).map((_) => {
            return {
                label: 'flag-of-' + _.name,
                value: _.name
            };
        });
        this.selectedCountry = 'Argentina';
    }

    ngOnInit(): void {
    }

}
