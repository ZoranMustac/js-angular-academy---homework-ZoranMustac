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
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, AuthLayoutComponent],
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
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
