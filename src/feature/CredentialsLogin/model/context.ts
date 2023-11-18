import { Dispatch, createContext } from 'react';
import { AppActions, LoginState } from './types';

interface IContext {
    state: LoginState,
    dispatch: Dispatch<AppActions>
}

export const LoginContext = createContext<IContext | undefined>(undefined)