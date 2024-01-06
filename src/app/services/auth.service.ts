import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '@interfaces/auth-responses';
import { SITE_CONFIG } from '@utils/config';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	user = {
		email: "",
		username: ""
	}
	token = "";

	constructor(
		private http: HttpClient
	) { }

	login(
		loginData: { email: string, password: string }
	): void {
		this.http.post<LoginResponse>(`${SITE_CONFIG.API_URL}/auth/login`, loginData).subscribe({
			next: (response) => {
				console.log('Login successful!', response);
				
				this.user.username = response.username;
				this.user.email = response.email;
				this.token = response.authentication.sessionToken;
			},
			error: (error) => console.error(error),
		});
	}
}
