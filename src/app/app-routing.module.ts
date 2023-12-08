import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { NavigationComponent } from './components/layouts/navigation/navigation.component';
import { AllShowsComponent } from './components/pages/all-shows/all-shows.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
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
			{
				path: 'profile',
				component: ProfileComponent,
			},
		],
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'register',
				component: RegisterComponent,
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
