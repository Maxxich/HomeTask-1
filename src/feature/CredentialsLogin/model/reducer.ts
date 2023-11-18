import { ActionsType, AppActions, LoginState, Status } from './types';

export function reducer(state: LoginState, action: AppActions): LoginState {
    switch (action.type) {
    case ActionsType.SET_EMAIL: return {
        ...state,
        email: action.payload,
        errorMessage: undefined,
        emailValidationError: undefined
    }
    case ActionsType.SET_EMAIL_ERROR_MESSAGE: return {
        ...state,
        emailValidationError: action.payload
    }
    case ActionsType.SET_PASSWORD: return {
        ...state,
        password: action.payload,
        errorMessage: undefined,
        passwordValidationError: undefined
    }
    case ActionsType.SET_PASSWORD_ERROR_MESSAGE: return {
        ...state,
        passwordValidationError: action.payload
    }
    case ActionsType.SET_STATUS: return {
        ...state,
        status: (action.payload as Status)
    }
    case ActionsType.SET_ERROR_MESSAGE: return {
        ...state,
        errorMessage: action.payload
    }
    default: return state
    }
}