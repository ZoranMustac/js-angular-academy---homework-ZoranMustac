import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AuthFormModule } from '../../auth-form/auth-form.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatCardModule,
		MatInputModule,
		AuthFormModule,
		RouterModule,
		MatButtonModule,
	],
	exports: [RegisterComponent],
})
export class RegisterModule {}
