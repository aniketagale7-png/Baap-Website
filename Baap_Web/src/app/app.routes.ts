import { RouterModule, Routes } from '@angular/router';
import { Company } from './company/company';
import { Home } from './home/home';
import { NgModule } from '@angular/core';
import { Product } from './product/product';
import { Community } from './community/community';
import { Education } from './education/education';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'company', component: Company },
  { path: 'product', component: Product },
  { path: 'community', component: Community },
  { path: 'education', component: Education },

  {
    path: 'services',
    loadChildren: () =>
      import('./services/services-module').then((m) => m.ServicesModule),
  },
];

