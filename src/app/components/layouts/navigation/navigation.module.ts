import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule, RouterModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule],
	exports: [NavigationComponent],
})
export class NavigationModule {}
