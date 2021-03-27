import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartialsModule } from '../../partials/partials.module';

import { RouterModule, Routes } from '@angular/router';

import { DevelopmentComponent } from './development.component';
import { ChangePositionComponent } from './change-position/change-position.component';
import { SalaryIncreaseComponent } from './salary-increase/salary-increase.component';
import { CargoFuncComponent } from './cargo-func/cargo-func.component';
import { SalarioFuncComponent } from './salario-func/salario-func.component';
import { CargoNuevoComponent } from './cargo-nuevo/cargo-nuevo.component';
import { SalarioNuevoComponent } from './salario-nuevo/salario-nuevo.component';

const routes: Routes = [
	{
		path: '',
		component: DevelopmentComponent,
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'modifcargo',
				component: ChangePositionComponent,
			},
			{
				path: 'modifsalario',
				component: SalaryIncreaseComponent
			},
			{
				path : 'cargo-func',
				component : CargoFuncComponent
			},
			{
				path : 'salario-func',
				component : SalarioFuncComponent
			},
			{
				path : 'cargo-nuevo',
				component : CargoNuevoComponent
			},
			{
				path : 'salario-nuevo',
				component : SalarioNuevoComponent
			}
		]
	}
];


@NgModule({
  declarations: [ChangePositionComponent,SalaryIncreaseComponent, DevelopmentComponent,CargoFuncComponent, SalarioFuncComponent, CargoNuevoComponent, SalarioNuevoComponent],
  imports: [
		CommonModule,
		PartialsModule,
    RouterModule.forChild(routes),
  ],
  exports : [DevelopmentComponent]
})
export class DevelopmentModule { 
  static forRoot(): ModuleWithProviders {
		return {
			ngModule: DevelopmentModule,
		};
	}
}
