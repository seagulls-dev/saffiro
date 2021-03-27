// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';
import {AuthUserGuard } from './core/auth';

const routes: Routes = [
	{ path : '', loadChildren : () => import('../app/views/pages/home/home.module').then(m => m.HomeModule)},
	{ path: 'admin', loadChildren: () => import('../app/views/pages/auth/auth.module').then(m => m.AuthModule)},
	{ path : 'user', loadChildren : () => import('../app/views/pages/auth-user/auth-user.module').then(m => m.AuthUserModule)},
	{
		path: 'admin',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('../app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path : 'desarrollo',
				loadChildren: () => import('../app/views/pages/development/development.module').then(m => m.DevelopmentModule)
			},
			{
				path : 'reclutamiento',
				loadChildren : () => import('../app/views/pages/recruitment/recruitment.module').then(m => m.RecruitmentModule)
			},
			{
				path : 'evaluacion',
				loadChildren : () => import('../app/views/pages/evaluations/evaluations.module').then(m => m.EvaluationsModule)
			},
			{
				path : 'beneficios',
				loadChildren : () => import('../app/views/pages/benefits/benefits.module').then(m => m.BenefitsModule)
			},
			{
				path : 'actividad',
				loadChildren : () => import('../app/views/pages/activity/activity.module').then(m => m.ActivityModule)
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'admin/dashboard', pathMatch: 'full'}
		]
	},
	{
		path: 'user',
		component: BaseComponent,
		canActivate: [AuthUserGuard],
		children : [
			{
				path : 'dashboard',
				loadChildren : () => import('../app/views/pages/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
			},
			{
				path : 'beneficios-usuario',
				loadChildren : () => import('../app/views/pages/user-benefits/user-benefits.module').then(m => m.UserBenefitsModule)
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'user/user-benefits', pathMatch: 'full'},
			{path: '**', redirectTo: 'user/user-benefits', pathMatch: 'full'}
		]
	},
	{path: '', redirectTo: '', pathMatch: 'full'},
	{path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
