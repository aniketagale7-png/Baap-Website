import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Services } from './services';
import { Software } from './software/software';
import { Ai } from './ai/ai';
import { DigitalMarketing } from './digital-marketing/digital-marketing';
import { DataAnalytics } from './data-analytics/data-analytics';
import { HireReadyTalent } from './hire-ready-talent/hire-ready-talent';


const routes: Routes = [
  { path: '', component: Services }, // <-- default for /services
  { path: 'software', component: Software }, // /services/software
  { path: 'ai', component: Ai }, // /services/ai
  { path: 'digital-marketing', component: DigitalMarketing }, // /services/digital-marketing
  { path: 'data-analytics', component: DataAnalytics }, // /services/data-analytics
  { path: 'hire-ready-talent', component: HireReadyTalent } // /services/hire-ready-talent
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesModule { }


