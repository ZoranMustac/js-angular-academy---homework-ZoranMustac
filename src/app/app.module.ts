import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllShowsModule } from './components/pages/all-shows/all-shows.module';
import { NavigationModule } from './components/layouts/navigation/navigation.module';
import { TopRatedShowsModule } from './components/pages/top-rated-shows/top-rated-shows.module';
import { ShowDetailsModule } from './components/pages/show-details/show-details.module';
import { RegisterModule } from './components/pages/register/register.module';
import { LoginModule } from './components/pages/login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthLayoutModule } from './components/layouts/auth-layout/auth-layout.module';
import { ProfileModule } from './components/pages/profile/profile.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AllShowsModule,
		NavigationModule,
		TopRatedShowsModule,
		ShowDetailsModule,
		RegisterModule,
		LoginModule,
		ReactiveFormsModule,
		HttpClientModule,
		AuthLayoutModule,
		ProfileModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
