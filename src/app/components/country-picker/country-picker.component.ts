import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {CountriesService} from '../../services/countries.service';
import {COUNTRIES_CONFIG0} from '../../config/countriesConfig';


@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.css']
})
export class CountryPickerComponent implements OnInit {
  selectedCountry = 'Afghanistan';
  countries: SelectItem[];

  constructor(private service: CountriesService) {
    this.countries = service.getAllCountries().map((_) => {
      return {
        label: 'flag-of-' + _.name,
        value: _.name
      };
    });
  }

  ngOnInit(): void {
  }

}
