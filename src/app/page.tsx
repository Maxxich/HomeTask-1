import { Metadata } from 'next'
import { Login } from '@/widget/Login/ui/Login'
import cls from './page.module.scss'

export const metadata: Metadata = {
    title: 'Вход | Y_Lab',
}

export default function Home() {
    return (
        <Login className={cls.login}/>
    )
}
