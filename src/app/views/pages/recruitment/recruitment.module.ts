import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PartialsModule } from '../../partials/partials.module';

import { RecruitmentComponent } from './recruitment.component';
import { NewProcessComponent } from './new-process/new-process.component';
import { NewProcessConfigComponent } from './new-process-config/new-process-config.component';
import { ActiveProcessComponent } from './active-process/active-process.component';
import { ClosedProcessComponent } from './closed-process/closed-process.component';
import { InductionComponent } from './induction/induction.component';
import { AsistComComponent } from './asist-com/asist-com.component';
import { ProcesoConfigComponent } from './proceso-config/proceso-config.component';
import { ProcesoPostComponent } from './proceso-post/proceso-post.component';
import { ProcesoContComponent } from './proceso-cont/proceso-cont.component';
import { SecreEjecComponent } from './secre-ejec/secre-ejec.component';
import { ProcesoConfigSecreComponent } from './proceso-config-secre/proceso-config-secre.component';
import { ProcesoPostCerradosComponent } from './proceso-post-cerrados/proceso-post-cerrados.component';
import { ProcesoContCerradosComponent } from './proceso-cont-cerrados/proceso-cont-cerrados.component';
import { ProcesoNuevoComponent } from './proceso-nuevo/proceso-nuevo.component';
import { ProcesoNuevoConfigComponent } from './proceso-nuevo-config/proceso-nuevo-config.component';
import { InductionNewComponent } from './induction-new/induction-new.component';

const routes: Routes = [
	{
		path: '',
		component: RecruitmentComponent,
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'proceso-nuevo',
				component: NewProcessComponent,
			},
			{
				path: 'proceso-nuevo-config',
				component: NewProcessConfigComponent,
			},
			{
				path: 'procesos-activos',
				component: ActiveProcessComponent
      },
      {
				path: 'procesos-cerrados',
				component: ClosedProcessComponent
      },
      {
				path: 'induccion',
				component: InductionComponent
			},
			{
				path : 'induction-neuvo',
				component : InductionNewComponent
			},
			{
				path : 'asist-com',
				component : AsistComComponent
			},
			{
				path : 'proceso-config',
				component : ProcesoConfigComponent
			},
			{
				path : 'proceso-post',
				component : ProcesoPostComponent
			},
			{
				path : 'proceso-cont',
				component : ProcesoContComponent
			},
			{
				path : 'secre-ejec',
				component : SecreEjecComponent
			},
			{
				path : 'proceso-config-secre',
				component : ProcesoConfigSecreComponent
			},
			{
				path : 'proceso-post-cerrados',
				component : ProcesoPostCerradosComponent
			},
			{
				path : 'proceso-cont-cerrados',
				component : ProcesoContCerradosComponent
			},
			{
				path : 'proceso-nuevo',
				component : ProcesoNuevoComponent
			},
			{
				path : 'proceso-nuevo-config',
				component : ProcesoNuevoConfigComponent
			}
		]
	}
];

@NgModule({
  declarations: [NewProcessComponent, ActiveProcessComponent, ClosedProcessComponent, InductionComponent, RecruitmentComponent, NewProcessConfigComponent, AsistComComponent, ProcesoConfigComponent, ProcesoPostComponent, ProcesoContComponent, SecreEjecComponent, ProcesoConfigSecreComponent, ProcesoPostCerradosComponent, ProcesoContCerradosComponent, ProcesoNuevoComponent, ProcesoNuevoConfigComponent, InductionNewComponent],
  imports: [
		CommonModule,
		PartialsModule,
    RouterModule.forChild(routes),
  ],
  exports : [RecruitmentComponent]
})
export class RecruitmentModule {
  // static forRoot(): ModuleWithProviders {
	// 	return {
	// 		ngModule: RecruitmentModule,
	// 	};
	// }
 }
