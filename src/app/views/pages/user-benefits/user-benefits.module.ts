import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PartialsModule } from '../../partials/partials.module';

import { UserBenefitsComponent } from './user-benefits.component';
import { UserBenefitsScheduleComponent } from './user-benefits-schedule/user-benefits-schedule.component';
import { UserBenefitsRequestsComponent } from './user-benefits-requests/user-benefits-requests.component'

const routes: Routes = [
	{
		path: '',
		component: UserBenefitsComponent,
		children: [
			{
				path: '',
				redirectTo: 'beneficios-usuario',
				pathMatch: 'full'
      },
      {
        path : 'beneficios-usuario',
        component : UserBenefitsRequestsComponent
      },
      {
        path : 'beneficios-usuario-calendario',
        component : UserBenefitsScheduleComponent
      }
		]
	}
];

@NgModule({
  declarations: [UserBenefitsComponent,UserBenefitsScheduleComponent,UserBenefitsRequestsComponent],
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild(routes),
  ],
  exports : [UserBenefitsComponent]
})
export class UserBenefitsModule {
  // static forRoot(): ModuleWithProviders {
	// 	return {
	// 		ngModule: RecruitmentModule,
	// 	};
	// }
 }
