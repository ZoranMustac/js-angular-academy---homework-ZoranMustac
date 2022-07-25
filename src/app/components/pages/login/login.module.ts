import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
import { AuthFormModule } from '../../auth-form/auth-form.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatCardModule,
		MatInputModule,
		AuthFormModule,
		RouterModule,
		MatButtonModule,
	],
	exports: [LoginComponent],
})
export class LoginModule {}
