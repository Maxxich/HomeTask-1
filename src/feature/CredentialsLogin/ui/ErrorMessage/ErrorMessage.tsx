import classNames from 'classnames';
import { Message } from '@/shared/ui/Message';
import cls from '../Shared.module.scss'
import { useLoginContext } from '../../lib/useLoginContext';

interface IErrorMessageProps {
}

export const ErrorMessage: React.FunctionComponent<IErrorMessageProps> = (props) => {

    const context = useLoginContext()

    const errorMessage = context?.state.errorMessage
    const validationError = 
        context?.state.emailValidationError || 
        context?.state.passwordValidationError || 
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
