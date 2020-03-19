import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {CountriesService} from '../../services/countries.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  selectedCountry = 'Afghanistan';
  countries: SelectItem[];

  constructor(private service: CountriesService) {
    this.countries = service.getCountriesByConfig([]).map((_) => {
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
