export interface AuthContextModel {
	isLoggedIn: boolean;
	login: (email: string, password: string) => void;
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
