import { useCallback } from 'react'
import { isEmail } from '@/shared/lib/isEmail'
import { mockedFetch } from '@/shared/lib/mockedFetch'
import { useLoginContext } from './useLoginContext'
import { loginActions } from './actions'

export const useFetchLogin = () => {

    const context = useLoginContext()

    return useCallback(async () => {
        if (!context) return
        const email = context.state.email
        const password = context.state.password

        let validationError = false

        if (!isEmail(email)) {
            context.dispatch(loginActions.setEmailValidationError('Неккоректная почта'))
            validationError = true
        }

        if (!password) {
            context.dispatch(loginActions.setPasswordValidationError('Пароль не должен быть пустым'))
            validationError = true
        }

        if (validationError) return



        context.dispatch(loginActions.setErrorMessage(undefined))
        context.dispatch(loginActions.setStatus('pending'))

        const response = await mockedFetch('', {
            method: 'POST',
            body: JSON.stringify({
                email, 
                password
            })
        })

        if (!response.ok) {
            context.dispatch(loginActions.setErrorMessage('Неверный логин или пароль'))
        }
        context.dispatch(loginActions.setStatus('idle'))
    }, [context])

}