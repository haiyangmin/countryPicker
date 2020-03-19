import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent} from './components/page-one/page-one.component';
import { PageTwoComponent} from './components/page-two/page-two.component';
import { PageThreeComponent} from './components/page-three/page-three.component';


const routes: Routes = [
  {
    path: '',
    component: PageThreeComponent
  },
  {
    path: 'countryPickerDemo0',
    component: PageOneComponent
  },
  {
    path: 'countryPickerDemo1',
    component: PageTwoComponent
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
