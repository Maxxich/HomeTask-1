'use client'
import classnames from 'classnames'
import { FormEvent } from 'react';
import { EmailInput } from './EmailInput/EmailInput';
import { PasswordInput } from './PasswordInput/PasswordInput';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ConfirmPasswordInput } from './ConfirmPasswordInput/ConfirmPasswordInput';
import { ContextProvider } from '../model/ContextProvider';

interface ICredentialsRegisterProps {
    className?: string
}

export const CredentialsRegister: React.FunctionComponent<ICredentialsRegisterProps> = ({
    className
}) => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }
  
    return (
        <ContextProvider>
            <form className={classnames(className)} onSubmit={onSubmit}>
                <EmailInput/>
                <PasswordInput/>
                <ConfirmPasswordInput/>
                <ErrorMessage/>
                <SubmitButton/>
            </form>
        </ContextProvider>
    );
};
