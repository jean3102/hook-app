export interface AuthContextModel {
	isLoggedIn: boolean;
	login: (info: LoginModel) => void;
	logout: () => void;
	user: User | null;
}

export interface User {
	id: number;
	name: string;
	email: string;
}

export interface AuthProviderModel {
	children: React.ReactNode;
}

export interface LoginModel {
	fullName: string;
	email: string;
	password: string;
}
