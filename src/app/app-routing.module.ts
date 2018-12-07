import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'browser', component: BrowserComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', component: DashboardComponent }
];


import { CardDetailComponent } from './Components/card-detail/card-detail.component';
import { BrowserComponent } from './Components/browser/browser.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
