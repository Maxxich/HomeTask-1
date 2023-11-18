'use client'
import classnames from 'classnames'
import { FormEvent } from 'react';
import { EmailInput } from './EmailInput/EmailInput';
import { PasswordInput } from './PasswordInput/PasswordInput';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ContextProvider } from '../model/ContextProvider';

interface ICredentialsLoginProps {
    className?: string
}

export const CredentialsLogin: React.FunctionComponent<ICredentialsLoginProps> = ({
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
                <ErrorMessage/>
                <SubmitButton/>
            </form>
        </ContextProvider>
    );
};
