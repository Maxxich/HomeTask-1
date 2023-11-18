import classNames from 'classnames';

import { TypedText } from '@/shared/ui/TypedText';
import TextLogo from '@/shared/assets/svg/TextLogo.svg'
import cls from './HelloScreen.module.scss'
import { Planet } from './Planet/Planet';
import { Helmet } from './Helmet/Helmet';
import { Ship } from './Ship/Ship';

interface IHelloScreenProps {
    className?: string
}


const texts = [
    'Добро пожаловать!   ',
    'Хорошего дня!   '
]

export const HelloScreen: React.FunctionComponent<IHelloScreenProps> = ({
    className
}) => {
    return (
        <div className={classNames(cls.container, className)}>
            <Ship/>
            <TextLogo className={cls.logo}/>
            <Helmet/>
            <Planet/>
            <TypedText texts={texts} className={cls.message}/>
        </div>
    )
};