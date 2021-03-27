import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PartialsModule } from '../../partials/partials.module';

import { BenefitsComponent } from './benefits.component'
import { TrainingRequestComponent } from './training-request/training-request.component';
import { CampaignRequestComponent } from './campaign-request/campaign-request.component';
import { BenefitRequestComponent } from './benefit-request/benefit-request.component';
import { LoanAppComponent } from './loan-app/loan-app.component';
import { CapacitaFuncComponent } from './capacita-func/capacita-func.component';
import { CapacitaIntegraComponent } from './capacita-integra/capacita-integra.component';
import { CampanasFuncComponent } from './campanas-func/campanas-func.component';
import { BenefitFuncComponent } from './benefit-func/benefit-func.component';
import { BenefitCitaComponent } from './benefit-cita/benefit-cita.component';
import { BenefitSoliComponent } from './benefit-soli/benefit-soli.component';
import { PrestamoFuncComponent } from './prestamo-func/prestamo-func.component';
import { PrestamoSoliComponent } from './prestamo-soli/prestamo-soli.component';
import { PrestamoContraComponent } from './prestamo-contra/prestamo-contra.component';
import { PrestamoAutoComponent } from './prestamo-auto/prestamo-auto.component';
import { PrestamoCuentComponent } from './prestamo-cuent/prestamo-cuent.component';
import { PrestamoPagoComponent } from './prestamo-pago/prestamo-pago.component';
import { PrestamoPagochequeComponent } from './prestamo-pagocheque/prestamo-pagocheque.component';
import { CapacitaNuevaComponent } from './capacita-nueva/capacita-nueva.component';
import { CampanaNuevaComponent } from './campana-nueva/campana-nueva.component';
import { BenefitNuevaComponent } from './benefit-nueva/benefit-nueva.component';
import { PrestamoNuevaComponent } from './prestamo-nueva/prestamo-nueva.component';
import { PrestamoSoliDescComponent } from './prestamo-soli-desc/prestamo-soli-desc.component';

const routes: Routes = [
	{
		path: '',
		component: BenefitsComponent,
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'solicit-capacitaciones',
				component: TrainingRequestComponent,
      },
      {
				path: 'solicit-campanas',
				component: CampaignRequestComponent,
      },
      {
				path: 'solicit-beneficios',
				component: BenefitRequestComponent,
      },
      {
				path: 'solicit-prestamos',
				component: LoanAppComponent,
			},
			{
				path : 'capacita-func',
				component : CapacitaFuncComponent
			},
			{
				path : 'capacita-integra',
				component : CapacitaIntegraComponent
			},
			{
				path : 'campanas-func',
				component : CampanasFuncComponent
			},
			{
				path : 'beneficio-func',
				component : BenefitFuncComponent
			},
			{
				path : 'beneficio-cita',
				component : BenefitCitaComponent
			},
			{
				path : 'beneficio-soli',
				component : BenefitSoliComponent
			},
			{
				path : 'prestamo-func',
				component : PrestamoFuncComponent
			},
			{
				path : 'prestamo-soli',
				component : PrestamoSoliComponent
			},
			{
				path : 'prestamo-contra',
				component : PrestamoContraComponent
			},
			{
				path : 'prestamo-auto',
				component : PrestamoAutoComponent
			},
			{
				path : 'prestamo-cuent',
				component : PrestamoCuentComponent
			},
			{
				path : 'prestamo-pago',
				component : PrestamoPagoComponent
			},
			{
				path : 'prestamo-pagocheque',
				component : PrestamoPagochequeComponent
			},
			{
				path : 'capacita-nueva',
				component : CapacitaNuevaComponent
			},
			{
				path : 'campana-nueva',
				component : CampanaNuevaComponent
			},
			{
				path : 'beneficio-nueva',
				component : BenefitNuevaComponent
			},
			{
				path : 'prestamo-nueva',
				component : PrestamoNuevaComponent
			},
			{
				path : 'prestamo-soli-desc',
				component : PrestamoSoliDescComponent
			}
		]
	}
];

@NgModule({
  declarations: [TrainingRequestComponent, CampaignRequestComponent, BenefitRequestComponent, LoanAppComponent, BenefitsComponent, CapacitaFuncComponent, CapacitaIntegraComponent, CampanasFuncComponent, BenefitFuncComponent, BenefitCitaComponent, BenefitSoliComponent, PrestamoFuncComponent, PrestamoSoliComponent, PrestamoContraComponent, PrestamoAutoComponent, PrestamoCuentComponent, PrestamoPagoComponent, PrestamoPagochequeComponent, CapacitaNuevaComponent, CampanaNuevaComponent, BenefitNuevaComponent, PrestamoNuevaComponent, PrestamoSoliDescComponent],
  imports: [
		CommonModule,
		PartialsModule,
    RouterModule.forChild(routes),
  ]
})
export class BenefitsModule { }
