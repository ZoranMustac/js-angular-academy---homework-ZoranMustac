import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { IAuthFormData } from 'src/show/auth-form-data.interface';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	public form = new FormGroup(
		{
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)]),
			confirmPassword: new FormControl('', Validators.required),
		},
		{
			validators: this.validateConfirmPassword('password', 'confirmPassword'),
		},
	);

	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	private validateConfirmPassword(passwordValue: string, confirmPasswordValue: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const form = control as FormGroup;
			const formPassword = form.get(passwordValue)?.value;
			const formConfirmPassword = form.get(confirmPasswordValue)?.value;

			return formPassword === formConfirmPassword ? null : { doesNotMatchValue: true };
		};
	}

	public onRegisterClick(event: Event) {
		event.preventDefault();
		this.authService
			.register({
				email: this.form.controls.email.value,
				password: this.form.controls.password.value,
				confirmPassword: this.form.controls.confirmPassword.value,
			} as IAuthFormData)
			.subscribe(() => {
				this.router.navigate(['']);
			});

		localStorage.setItem('data', JSON.stringify(this.form.controls.email.value));
	}
}
