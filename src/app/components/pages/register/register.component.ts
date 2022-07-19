import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
		console.log(this.form.controls.email.value);
		console.log(this.form.controls.password.value);
		console.log(this.form.controls.confirmPassword.value);
	}
}
