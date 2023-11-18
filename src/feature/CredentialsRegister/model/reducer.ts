import { ActionsType, AppActions, RegisterState, Status } from './types';

export function reducer(state: RegisterState, action: AppActions): RegisterState {
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
        passwordValidationError: undefined,
        confirmPasswordValidationError: undefined
    }
    case ActionsType.SET_PASSWORD_ERROR_MESSAGE: return {
        ...state,
        passwordValidationError: action.payload
    }
    case ActionsType.SET_CONFIRM_PASSWORD: return {
        ...state,
        confirmPassword: action.payload,
        errorMessage: undefined,
        confirmPasswordValidationError: undefined
    }
    case ActionsType.SET_CONFIRM_PASSWORD_ERROR_MESSAGE: return {
        ...state,
        confirmPasswordValidationError: action.payload
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