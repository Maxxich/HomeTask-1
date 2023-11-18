import { ChangeEvent } from 'react';
import { Input } from '@/shared/ui/Input';
import PasswordSvg from '@/shared/assets/svg/Password.svg'
import cls from '../Shared.module.scss'
import { useRegisterContext } from '../../lib/useRegisterContext';
import { loginActions } from '../../lib/actions';
import { useGetIsPending } from '../../lib/useGetIsPending';

interface IPasswordInputProps {
}

export const PasswordInput: React.FunctionComponent<IPasswordInputProps> = (props) => {

    const context = useRegisterContext()
    const isPending = useGetIsPending()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        context?.dispatch(loginActions.setPassword(e.target.value))
    }



    return (
        <Input
            label="Пароль"
            placeholder="Введите пароль..."
            className={cls.margin6}
            type="password"
            value={context?.state.password ?? ''}
            onChange={onChange}
            disabled={isPending}
            isError={Boolean(context?.state.passwordValidationError)}
            addonLeft={<PasswordSvg/>}
        />
    );
};
