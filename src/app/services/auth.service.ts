import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '@interfaces/auth-responses';
import { SITE_CONFIG } from '@utils/config';
import { Observable, catchError, map, of } from 'rxjs';

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

	login(loginData: { email: string, password: string }): Observable<boolean> {
		return this.http.post<LoginResponse>(`${SITE_CONFIG.API_URL}/auth/login`, loginData)
			.pipe(
				map((response) => {
					this.user.username = response.username;
					this.user.email = response.email;
					this.token = response.authentication.sessionToken;

					return true;
				}),
				catchError((error) => {
					console.error(error);
					return of(false);
				})
			);
	}

	getSessionToken(): string {
		return this.token;
	}
}
