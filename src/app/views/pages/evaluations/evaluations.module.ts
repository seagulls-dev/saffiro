import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PartialsModule } from '../../partials/partials.module';

import { EvaluationsComponent } from './evaluations.component';
import { WorkingEnvironmentComponent } from './working-environment/working-environment.component';
import { PerformanceComponent } from './performance/performance.component';
import { ClimaLaboEvalComponent } from './clima-labo-eval/clima-labo-eval.component';
import { ClimaLaboResulComponent } from './clima-labo-resul/clima-labo-resul.component';
import { ClimaLaboIniciatComponent } from './clima-labo-iniciat/clima-labo-iniciat.component';
import { DesemEvalComponent } from './desem-eval/desem-eval.component';
import { DesemIntegraComponent } from './desem-integra/desem-integra.component';
import { DesemResulComponent } from './desem-resul/desem-resul.component';
import { DesemIniciatComponent } from './desem-iniciat/desem-iniciat.component';
import { ClimaLaboralNueComponent } from './clima-laboral-nue/clima-laboral-nue.component';
import { DesemNuevaComponent } from './desem-nueva/desem-nueva.component';

const routes: Routes = [
	{
		path: '',
		component: EvaluationsComponent,
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'clima-laboral',
				component: WorkingEnvironmentComponent,
			},
			{
				path: 'desempeno',
				component: PerformanceComponent
			},
			{
				path : 'clima-laboral-eval',
				component : ClimaLaboEvalComponent
			},
			{
				path : 'clima-laboral-resul',
				component : ClimaLaboResulComponent
			},
			{
				path : 'clima-laboral-iniciat',
				component : ClimaLaboIniciatComponent
			},
			{
				path : 'clima-laboral-nue',
				component : ClimaLaboralNueComponent
			},
			{
				path : 'desem-eval',
				component: DesemEvalComponent
			},
			{
				path: 'desem-integra',
				component : DesemIntegraComponent
			},
			{
				path : 'desem-resul',
				component : DesemResulComponent
			},
			{
				path : 'desem-iniciat',
				component : DesemIniciatComponent
			},
			{
				path : 'desem-neuva',
				component : DesemNuevaComponent
			}
		]
	}
];

@NgModule({
  declarations: [WorkingEnvironmentComponent, PerformanceComponent, EvaluationsComponent, ClimaLaboEvalComponent, ClimaLaboResulComponent, ClimaLaboIniciatComponent, DesemEvalComponent, DesemIntegraComponent, DesemResulComponent, DesemIniciatComponent,ClimaLaboralNueComponent, DesemNuevaComponent],
  imports: [
		CommonModule,
		PartialsModule,
    RouterModule.forChild(routes),
  ]
})
export class EvaluationsModule {
  static forRoot(): ModuleWithProviders {
		return {
			ngModule: EvaluationsModule,
		};
	}
 }
