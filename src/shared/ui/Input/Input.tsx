import classNames from 'classnames'
import cls from './Input.module.scss'

type Width = 'fullwidth'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
  addonLeft?: React.ReactElement
  isError?: boolean
  className?: string
  width?: Width
}

export const Input: React.FunctionComponent<IInputProps> = ({
    label,
    addonLeft,
    className,
    isError,
    disabled,
    width = 'fullwidth',
    ...rest
}) => {


    // addon section
    const addon = addonLeft && (
        <div className={classNames(cls.addonLeft)}>
            {addonLeft}
        </div>
    )


    // input section
    const input = (
        <div className={classNames(cls.input_container)}>
            {addon && <div className={cls.addonLeft}>
                {addon}
            </div>}
            <input className={classNames(cls.input)}
                disabled={disabled}
                {...rest}
            />
        </div>
    )


    // label section
    const labelComp = label && (
        <label className={classNames(cls.label)}>{label}</label>
    )


    // container section
    const conatinerMods: Mods = {
        [cls.danger]: isError,
        
    }
    
    return (
        <div className={classNames(cls.container, conatinerMods, cls[width], className)}>
            {labelComp}
            {input}
        </div>    
    )
}

