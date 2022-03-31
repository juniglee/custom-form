import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExperimentFormComponent } from './pages/experiment-form/experiment-form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'form', component: ExperimentFormComponent },
	{ path: 'form/:formType', component: ExperimentFormComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		ExperimentFormComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes, { useHash: true })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
