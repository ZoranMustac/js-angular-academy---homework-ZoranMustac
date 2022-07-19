import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../../layouts/navigation/navigation.module';
import { RouterModule } from '@angular/router';
import { AllShowsComponent } from './all-shows.component';
import { ShowsListModule } from '../../shows-list/shows-list.module';

@NgModule({
	declarations: [AllShowsComponent],
	exports: [AllShowsComponent],
	imports: [CommonModule, NavigationModule, RouterModule, ShowsListModule],
})
export class AllShowsModule {}
