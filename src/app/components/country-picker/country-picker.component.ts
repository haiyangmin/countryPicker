import {Component, Input, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {CountriesService} from '../../services/countries.service';
import {COUNTRIES_CONFIG0} from '../../config/countriesConfig';


@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.css']
})
export class CountryPickerComponent implements OnInit {
  @Input() selectedCountry: string;
  @Input() options: SelectItem[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

