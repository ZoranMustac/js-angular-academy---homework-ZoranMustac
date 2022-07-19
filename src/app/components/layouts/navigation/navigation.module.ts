import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule, RouterModule, MatSidenavModule, MatButtonModule, MatListModule],
	exports: [NavigationComponent],
})
export class NavigationModule {}
