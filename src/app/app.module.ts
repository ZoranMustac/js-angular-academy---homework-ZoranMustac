import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllShowsModule } from './components/pages/all-shows/all-shows.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { MatCardModule } from '@angular/material/card';
import { TopRatedShowsModule } from './components/pages/top-rated-shows/top-rated-shows.module';
import { ShowDetailsModule } from './components/pages/show-details/show-details.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AllShowsModule,
		NavigationModule,
		MatCardModule,
		TopRatedShowsModule,
		ShowDetailsModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
