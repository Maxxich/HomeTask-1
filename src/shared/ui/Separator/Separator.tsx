import classNames from "classnames"
import cls from "./Separator.module.scss"

type Width = 'fullwidth'

interface ISeparatorProps {
    width?: Width
    className?: string
}


export const Separator: React.FunctionComponent<ISeparatorProps> = ({
    width = 'fullwidth',
    className,
}) => {

    const separatorClasses = classNames(
        cls.Separator,
        cls[width],
        className
    )

    return (
        <div className={separatorClasses}/>
    )
}