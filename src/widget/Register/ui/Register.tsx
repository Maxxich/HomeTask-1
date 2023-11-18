import classNames from 'classnames';
import { CredentialsRegister } from '@/feature/CredentialsRegister';
import Logo from '@/shared/assets/svg/Logo.svg'
import { HelloScreen } from '@/feature/HelloScreen';
import { Link } from '@/shared/ui/Link';
import cls from './Register.module.scss'


interface IRegisterProps {
    className?: string
}

export const Register: React.FunctionComponent<IRegisterProps> = ({
    className
}) => {


    return (
        <div className={classNames(cls.container,className)}>
            <div className={cls.form}>
                <Logo className={cls.logo}/>
                <h1 className={cls.h1}>Регистрация</h1>
                <CredentialsRegister className={cls.register}/>
                <div>
                    <span className={cls.span}>Уже есть аккаунт?</span>
              &nbsp;
                    <Link
                        href='/'
                    >
                Войти
                    </Link>
                </div>
            </div>
            <div className={cls.separator}/>
            <HelloScreen className={cls.hello}/>
        </div>
    );
};
