import { ChangeEvent } from 'react';
import { Input } from '@/shared/ui/Input';
import EmailSvg from '@/shared/assets/svg/Email.svg'
import cls from '../Shared.module.scss'
import { useLoginContext } from '../../lib/useLoginContext';
import { loginActions } from '../../lib/actions';
import { useGetIsPending } from '../../lib/useGetIsPending';

interface IEmailInputProps {
}

export const EmailInput: React.FunctionComponent<IEmailInputProps> = (props) => {

    const context = useLoginContext()
    const isPending = useGetIsPending()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        context?.dispatch(loginActions.setEmail(e.target.value))
    }

    return (
        <Input
            label="Почта"
            placeholder="Введите почту..."
            className={cls.margin6}
            value={context?.state.email ?? ''}
            onChange={onChange}
            disabled={isPending}
            isError={Boolean(context?.state.emailValidationError)}
            addonLeft={<EmailSvg/>}
        />
    );
};
