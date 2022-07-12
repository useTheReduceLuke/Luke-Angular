import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	ResumeComponent,
	AboutComponent,
	ContactComponent, 
	HomeComponent,
} from './pages/';

import * as Portfolio from './pages/portfolio';

const routes: Routes = [
	{
		path: 'portfolio',
		component: Portfolio.PortfolioProgrammingComponent,
		// children: [
		// 	{
		// 		path: 'software',
		// 		component: Portfolio.PortfolioProgrammingComponent,
		// 	},
		// 	{
		// 		path: 'voice',
		// 		component: Portfolio.PortfolioVoiceComponent,
		// 	},
		// ]
	},
	{
		path: 'resume',
		component: ResumeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: '**',
		redirectTo: 'home'
	} // End of path

];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRouting { }
