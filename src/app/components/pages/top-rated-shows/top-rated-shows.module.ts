import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedShowsComponent } from './top-rated-shows.component';

@NgModule({
	declarations: [TopRatedShowsComponent],
	imports: [CommonModule],
	exports: [TopRatedShowsComponent],
})
export class TopRatedShowsModule {}
