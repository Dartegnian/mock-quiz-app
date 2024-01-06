import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-login-modal',
	standalone: true,
	imports: [
		HttpClientModule,
		ReactiveFormsModule
	],
	templateUrl: './login-modal.component.html',
	styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder, private http: HttpClient
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			const loginData = this.loginForm.value;
			const apiUrl = 'https://quiz-api.dartegnian.com/auth/login';

			this.http.post(apiUrl, loginData).subscribe({
				next: (response) => {
					console.log('Login successful!', response);
				},
				error: (error) => console.error(error),
			});
		}
	}
}
