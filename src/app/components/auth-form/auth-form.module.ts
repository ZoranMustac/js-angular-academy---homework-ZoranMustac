import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [AuthFormComponent],
	imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatIconModule],
	exports: [AuthFormComponent],
})
export class AuthFormModule {}
