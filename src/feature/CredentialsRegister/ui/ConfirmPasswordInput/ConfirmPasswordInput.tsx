import { ChangeEvent } from 'react';
import { Input } from '@/shared/ui/Input';
import PasswordSvg from '@/shared/assets/svg/Password.svg'
import cls from '../Shared.module.scss'
import { useRegisterContext } from '../../lib/useRegisterContext';
import { loginActions } from '../../lib/actions';
import { useGetIsPending } from '../../lib/useGetIsPending';

interface IConfirmPasswordInputProps {
}

export const ConfirmPasswordInput: React.FunctionComponent<IConfirmPasswordInputProps> = (props) => {

    const context = useRegisterContext()
    const isPending = useGetIsPending()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        context?.dispatch(loginActions.setConfirmPassword(e.target.value))
    }



    return (
        <Input
            label="Подтвердите пароль"
            placeholder="Подтвердите пароль..."
            className={cls.margin12}
            type="password"
            value={context?.state.confirmPassword ?? ''}
            onChange={onChange}
            disabled={isPending}
            isError={Boolean(context?.state.passwordValidationError)}
            addonLeft={<PasswordSvg/>}
        />
    );
};
