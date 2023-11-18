import * as React from 'react';
import { Button } from '@/shared/ui/Button';
import { useGetIsPending } from '../../lib/useGetIsPending';
import { useFetchLogin } from '../../lib/useFetchLogin';
import { useLoginContext } from '../../lib/useLoginContext';

interface ISubmitButtonProps {
}

export const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props) => {
    const context = useLoginContext()
    const isPending = useGetIsPending()
    const text = isPending ? 'Загрузка' : 'Войти'

    const validationError = context?.state.emailValidationError || context?.state.passwordValidationError || undefined 
    const login = useFetchLogin()

    const disabled = isPending || Boolean(validationError)

    return (
        <Button
            disabled={disabled}
            onClick={login}
        >
            {
                text
            }
        </Button>
    );
};
