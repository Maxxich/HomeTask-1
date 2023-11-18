import classnames from 'classnames'
import { QRCode } from '@/shared/ui/QRCode';
import QR from '@/shared/assets/svg/QR.svg'
import cls from './QRLogin.module.scss'

interface IQRLoginProps {
    className?: string
}

export const QRLogin: React.FunctionComponent<IQRLoginProps> = ({
    className
}) => {
    return (
        <div className={classnames(className, cls.container)}>
            <QRCode QRCodeElement={<QR/>}/>
            <span className={cls.text}>Быстрый вход по QR-коду</span>
        </div>
    );
};
