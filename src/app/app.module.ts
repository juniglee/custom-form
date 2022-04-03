import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';

import { AnswerService } from './services/answer.service';
import { FormService } from './services/form.service';

import { ConfirmationModalComponent } from './component/confirmation-modal/confirmation-modal.component';

import { ExperimentFormComponent } from './pages/experiment-form/experiment-form.component';
import { ExperimentsComponent } from './pages/experiments/experiments.component';

import { HomeComponent } from './pages/home/home.component';
import { ConfirmaationComponent } from './pages/confirmation/confirmation.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'form', component: ExperimentFormComponent },
	{ path: 'form/:formType', component: ExperimentFormComponent },
	{ path: 'experiments', component: ExperimentsComponent },
	{ path: 'confirmation', component: ConfirmaationComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ConfirmaationComponent,
		ConfirmationModalComponent,
		ExperimentFormComponent,
		ExperimentsComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		ReactiveFormsModule,
		RouterModule.forRoot(routes, { useHash: true })
	],
	providers: [
		AnswerService,
		FormService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
