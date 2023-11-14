import { ReactElement } from 'react'
import cls from './QRCode.module.scss'

interface IQRCodeProps {
    QRCodeElement: ReactElement
}

export const QRCode: React.FunctionComponent<IQRCodeProps> = ({
    QRCodeElement
}) => {
  return (
    <div className={cls.container}>
        {QRCodeElement}
    </div>
  );
};