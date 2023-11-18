import { ActionsType, SetEmailAction, SetEmailErrorMessageAction, SetErrorMessageAction, SetPasswordAction, SetPasswordErrorMessageAction, SetStatusAction, Status } from '../model/types';

const setEmail: (payload: string) => SetEmailAction = (payload) => ({
    type: ActionsType.SET_EMAIL,
    payload
}) 

const setEmailValidationError: (payload: string | undefined) => SetEmailErrorMessageAction = (payload) => ({
    type: ActionsType.SET_EMAIL_ERROR_MESSAGE,
    payload
}) 

const setPassword: (payload: string) => SetPasswordAction = (payload) => ({
    type: ActionsType.SET_PASSWORD,
    payload
}) 

const setPasswordValidationError: (payload: string | undefined) => SetPasswordErrorMessageAction = (payload) => ({
    type: ActionsType.SET_PASSWORD_ERROR_MESSAGE,
    payload
}) 

const setStatus: (payload: Status) => SetStatusAction = (payload) => ({
    type: ActionsType.SET_STATUS,
    payload
}) 

const setErrorMessage: (payload: string | undefined) => SetErrorMessageAction = (payload) => ({
    type: ActionsType.SET_ERROR_MESSAGE,
    payload
}) 

export const loginActions = {
    setEmail,
    setEmailValidationError,
    setPassword,
    setPasswordValidationError,
    setStatus,
    setErrorMessage
}