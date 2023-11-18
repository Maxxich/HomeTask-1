import { ReactElement, useReducer } from 'react';
import { LoginContext } from './context';
import { reducer } from './reducer'
import { LoginState } from './types';


interface IContextProviderProps {
    children: ReactElement
}

const initialValue: LoginState = { 
    email: '',
    password: '',
    status: 'idle',
    errorMessage: undefined,
    passwordValidationError: undefined,
    emailValidationError: undefined
}

export const ContextProvider: React.FunctionComponent<IContextProviderProps> = ({
    children
}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <LoginContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </LoginContext.Provider>
    );
};
