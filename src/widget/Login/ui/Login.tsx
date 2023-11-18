import classNames from 'classnames';
import { CredentialsLogin } from '@/feature/CredentialsLogin';
import { GitHubLogin } from '@/feature/GitHubLogin';
import { GoogleLogin } from '@/feature/GoogleLogin';
import { QRLogin } from '@/feature/QRLogin';
import { Separator } from '@/shared/ui/Separator';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Link } from '@/shared/ui/Link';
import cls from './Login.module.scss'


interface ILoginProps {
    className?: string
}

export const Login: React.FunctionComponent<ILoginProps> = ({
    className
}) => {
    return (
        <div className={classNames(cls.container,className)}>
            <Logo className={cls.logo}/>
            <h1 className={cls.h1}>Вход</h1>
            <CredentialsLogin className={cls.login}/>
            <div>
                <span className={cls.span}>Еще нет аккаунта?</span>
          &nbsp;
                <Link
                    href='/register'
                >
            Зарегистрироваться
                </Link>
            </div>
            <Separator className={cls.separator1}/>
            <QRLogin/>
            <Separator className={cls.separator2}/>
            <GitHubLogin className={cls.margin12}/>
            <GoogleLogin/>
        </div>
    );
};
