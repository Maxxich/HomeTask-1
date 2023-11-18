import classNames from 'classnames';
import { Message } from '@/shared/ui/Message';
import cls from '../Shared.module.scss'
import { useRegisterContext } from '../../lib/useRegisterContext';

interface IErrorMessageProps {
}

export const ErrorMessage: React.FunctionComponent<IErrorMessageProps> = (props) => {

    const context = useRegisterContext()

    const errorMessage = context?.state.errorMessage
    const validationError = 
        context?.state.emailValidationError || 
        context?.state.passwordValidationError || 
        context?.state.confirmPasswordValidationError || 
        undefined 

    const message = validationError || errorMessage

    if (!message) return null

    return (
        <Message 
            variant="danger" 
            className={classNames(cls.margin12, cls.maringAuto)}
        >
            {message}
        </Message>
    );
};
