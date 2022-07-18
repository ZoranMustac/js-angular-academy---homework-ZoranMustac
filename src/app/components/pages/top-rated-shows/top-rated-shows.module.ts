import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedShowsComponent } from './top-rated-shows.component';
import { ShowsListModule } from '../../shows-list/shows-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [TopRatedShowsComponent],
	exports: [TopRatedShowsComponent],
	imports: [CommonModule, ShowsListModule, RouterModule],
})
export class TopRatedShowsModule {}
