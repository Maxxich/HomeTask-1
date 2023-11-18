import { ReactElement, useReducer } from 'react';
import { RegisterContext } from './context';
import { reducer } from './reducer'
import { RegisterState } from './types';


interface IContextProviderProps {
    children: ReactElement
}

const initialValue: RegisterState = { 
    email: '',
    password: '',
    confirmPassword: '',
    status: 'idle',
    errorMessage: undefined,
    passwordValidationError: undefined,
    confirmPasswordValidationError: undefined,
    emailValidationError: undefined
}

export const ContextProvider: React.FunctionComponent<IContextProviderProps> = ({
    children
}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <RegisterContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </RegisterContext.Provider>
    );
};
