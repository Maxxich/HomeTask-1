import classNames from 'classnames'
import { ReactElement } from 'react'
import cls from './Button.module.scss'

type Width = 'fullwidth'
type Variant = 'colored' | 'dark'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    variant?: Variant
    width?: Width
    addonLeft?: ReactElement
    className?: string
}


export const Button: React.FunctionComponent<IButtonProps> = ({
    children,
    variant = 'colored',
    width = 'fullwidth',
    addonLeft,
    className,
    ...rest
}) => {

    const constructedAddonLeft = addonLeft
        ? <div className={cls.addon}>
            {addonLeft}
        </div>
        : null

    const buttonClasses = classNames(
        cls.Button,
        cls[width],
        cls[variant],
        {
            [cls.disabled]: rest.disabled
        },
        className
    )

    return (
        <button className={buttonClasses} {...rest}>
            {constructedAddonLeft}
            <span className={cls.text}>
                {children}
            </span>
        </button>
    )
}
