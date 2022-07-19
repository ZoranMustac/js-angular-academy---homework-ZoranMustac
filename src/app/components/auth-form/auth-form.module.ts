import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [AuthFormComponent],
	imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
	exports: [AuthFormComponent],
})
export class AuthFormModule {}
