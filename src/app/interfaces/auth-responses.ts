export interface LoginResponse {
	authentication: {
		password: string;
		salt: string;
		sessionToken: string;
	};
	__v: number;
	_id: string;
	username: string;
	email: string;
}
