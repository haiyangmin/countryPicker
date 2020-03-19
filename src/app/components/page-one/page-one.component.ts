import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {CountriesService} from '../../services/countries.service';
import {COUNTRIES_CONFIG0} from '../../config/countriesConfig';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  selectedCountry = 'Afghanistan';
  countries: SelectItem[];

  constructor(private service: CountriesService) {
    this.countries = service.getCountriesByConfig(COUNTRIES_CONFIG0).map((_) => {
      return {
        label: 'flag-of-' + _.name,
        value: _.name
      };
    });
    this.selectedCountry = 'Afghanistan';
  }

  ngOnInit(): void {
  }

}
