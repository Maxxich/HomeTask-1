export enum ActionsType {
    SET_EMAIL = 'setEmail',
    SET_EMAIL_ERROR_MESSAGE = 'setEmailErrorMessage',
    SET_PASSWORD = 'setPassword',
    SET_PASSWORD_ERROR_MESSAGE = 'setPasswordErrorMessage',
    SET_CONFIRM_PASSWORD = 'setConfirmPassword',
    SET_CONFIRM_PASSWORD_ERROR_MESSAGE = 'setConfirmPasswordErrorMessage',
    SET_STATUS = 'setStatus',
    SET_ERROR_MESSAGE = 'setErrorMessage'
}

export type Status = 'idle' | 'pending'

export type SetEmailAction = { 
    type: ActionsType.SET_EMAIL; 
    payload: string 
};

export type SetEmailErrorMessageAction = { 
    type: ActionsType.SET_EMAIL_ERROR_MESSAGE; 
    payload: string | undefined
};

export type SetPasswordAction = { 
    type: ActionsType.SET_PASSWORD; 
    payload: string 
};

export type SetPasswordErrorMessageAction = { 
    type: ActionsType.SET_PASSWORD_ERROR_MESSAGE; 
    payload: string | undefined
};

export type SetConfirmPasswordAction = { 
    type: ActionsType.SET_CONFIRM_PASSWORD; 
    payload: string 
};

export type SetConfirmPasswordErrorMessageAction = { 
    type: ActionsType.SET_CONFIRM_PASSWORD_ERROR_MESSAGE; 
    payload: string | undefined
};

export type SetStatusAction = { 
    type: ActionsType.SET_STATUS; 
    payload: Status 
};

export type SetErrorMessageAction = { 
    type: ActionsType.SET_ERROR_MESSAGE; 
    payload: string | undefined
};

export type AppActions = 
    SetEmailAction | 
    SetEmailErrorMessageAction | 
    SetPasswordAction | 
    SetPasswordErrorMessageAction | 
    SetConfirmPasswordAction | 
    SetConfirmPasswordErrorMessageAction | 
    SetStatusAction | 
    SetErrorMessageAction

export interface RegisterState {
    email: string
    emailValidationError: string | undefined
    password: string
    passwordValidationError: string | undefined
    confirmPassword: string
    confirmPasswordValidationError: string | undefined
    status: Status
    errorMessage: string | undefined
}