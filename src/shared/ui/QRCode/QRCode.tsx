import { ReactElement } from 'react'
import classnames from 'classnames'
import cls from './QRCode.module.scss'

interface IQRCodeProps {
    QRCodeElement: ReactElement
    className?: string
}

export const QRCode: React.FunctionComponent<IQRCodeProps> = ({
    QRCodeElement,
    className
}) => {
    return (
        <div className={classnames(cls.container, className)}>
            {QRCodeElement}
        </div>
    );
};