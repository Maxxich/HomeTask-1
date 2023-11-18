import type { Metadata } from 'next'
import '@/global/style/index.scss'
import cls from './layout.module.scss'

export const metadata: Metadata = {
    title: 'Y_Lab',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={'app_violet_theme'}>
                <main className={cls.main}>
                    <div
                        className={cls.background}
                    />
                    {children}
                </main>
            </body>
        </html>
    )
}
