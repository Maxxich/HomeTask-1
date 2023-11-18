import classNames from 'classnames';
import cls from './Message.module.scss'

type Width = 'fit-content' | 'fullwidth'
type Variant = 'danger' | 'green'

interface IMessageProps {
    children: string
    width?: Width
    variant?: Variant
    className?: string
}

export const Message: React.FunctionComponent<IMessageProps> = ({
    children,
    width = 'fit-content',
    variant = 'green',
    className
}) => {
    return (
        <span className={classNames(cls.span, cls[width], cls[variant], className)}>
            {children}
        </span>
    );
};
