import NextLink from 'next/link'
import cls from './Link.module.scss'

interface ILinkProps {
    href: string
    children: string
}

export const Link: React.FunctionComponent<ILinkProps> = ({
    href,
    children
}) => {
    return (
        <NextLink
            href={href}
            className={cls.link}
        >
            {children}
        </NextLink>
    )
};
