import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllShowsModule } from './components/pages/all-shows/all-shows.module';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AllShowsModule, NavigationModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
