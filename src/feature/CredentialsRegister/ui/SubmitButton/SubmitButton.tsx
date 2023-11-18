import * as React from 'react';
import { Button } from '@/shared/ui/Button';
import { useGetIsPending } from '../../lib/useGetIsPending';
import { useFetchRegister } from '../../lib/useFetchRegister';
import { useRegisterContext } from '../../lib/useRegisterContext';

interface ISubmitButtonProps {
}

export const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props) => {
    const context = useRegisterContext()
    const isPending = useGetIsPending()
    const text = isPending ? 'Загрузка' : 'Зарегистрироваться'

    const validationError = 
      context?.state.emailValidationError || 
      context?.state.passwordValidationError || 
      context?.state.confirmPasswordValidationError ||
      undefined 
    const register = useFetchRegister()

    const disabled = isPending || Boolean(validationError)

    return (
        <Button
            disabled={disabled}
            onClick={register}
        >
            {
                text
            }
        </Button>
    );
};
