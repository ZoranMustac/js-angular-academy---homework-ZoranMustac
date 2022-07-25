import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedShowsComponent } from './top-rated-shows.component';
import { ShowsListModule } from '../../shows-list/shows-list.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [TopRatedShowsComponent],
	exports: [TopRatedShowsComponent],
	imports: [CommonModule, ShowsListModule, RouterModule, MatCardModule],
})
export class TopRatedShowsModule {}
