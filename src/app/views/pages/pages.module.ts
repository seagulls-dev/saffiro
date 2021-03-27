// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { DevelopmentComponent } from './development/development.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ActivityComponent } from './activity/activity.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBenefitsComponent } from './user-benefits/user-benefits.component';

@NgModule({
	declarations: [],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
	],
	providers: []
})
export class PagesModule {
}
