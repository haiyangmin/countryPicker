import { Routes, RouterModule } from '@angular/router';
import { CountryPickerComponent } from './components/country-picker/country-picker.component';

const routes: Routes = [
  {
    path: '',
    component: CountryPickerComponent
  },
  {
    path: 'countries',
    component: CountryPickerComponent
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
