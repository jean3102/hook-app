import { createContext } from 'react';
import { AuthContextModel } from '../models/authContext.model';

export const AuthContext = createContext<AuthContextModel | undefined>(
	undefined
);
