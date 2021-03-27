import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PartialsModule } from '../../partials/partials.module';

import {ActivityComponent } from './activity.component';
import { ContractServiceComponent } from './contract-service/contract-service.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ContratServiceFuncComponent } from './contrat-service-func/contrat-service-func.component';
import { ContratServicePagoComponent } from './contrat-service-pago/contrat-service-pago.component';
import { ContratNuevaComponent } from './contrat-nueva/contrat-nueva.component';

const routes: Routes = [
	{
		path: '',
		component: ActivityComponent,
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'contrat-servicios',
				component: ContractServiceComponent,
			},
			{
				path: 'cumpleaneros',
				component: BirthdayComponent
			},
			{
				path : 'contrat-service-func',
				component : ContratServiceFuncComponent
			},
			{
				path : 'contrat-service-pago',
				component : ContratServicePagoComponent
			},
			{
				path : 'contrat-nueva',
				component : ContratNuevaComponent
			}
		]
	}
];

@NgModule({
  declarations: [ContractServiceComponent, BirthdayComponent, ActivityComponent, ContratServiceFuncComponent, ContratServicePagoComponent, ContratNuevaComponent],
  imports: [
		CommonModule,
		PartialsModule,
    RouterModule.forChild(routes),
  ]
})
export class ActivityModule { }
