import { Dispatch, createContext } from 'react';
import { AppActions, RegisterState } from './types';

interface IContext {
    state: RegisterState,
    dispatch: Dispatch<AppActions>
}

export const RegisterContext = createContext<IContext | undefined>(undefined)