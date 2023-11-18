import { Metadata } from 'next'
import { Register } from '@/widget/Register'
import cls from './page.module.scss'

export const metadata: Metadata = {
    title: 'Регистрация | Y_Lab',
}

export default function Home() {
    return (
        <Register className={cls.register}/>
    )
}
