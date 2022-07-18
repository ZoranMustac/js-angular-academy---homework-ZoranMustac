import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AllShowsComponent } from './components/pages/all-shows/all-shows.component';
import { ShowDetailsComponent } from './components/pages/show-details/show-details.component';
import { TopRatedShowsComponent } from './components/pages/top-rated-shows/top-rated-shows.component';

const routes: Routes = [
	{
		path: '',
		component: NavigationComponent,
		children: [
			{
				path: '',
				component: AllShowsComponent,
			},
			{
				path: 'top-rated-shows',
				component: TopRatedShowsComponent,
			},
			{
				path: '',
				component: ShowDetailsComponent,
			},
			{
				path: 'show-details/:id',
				component: ShowDetailsComponent,
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
