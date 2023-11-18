'use client'
import { useEffect, useId } from 'react';
import classNames from 'classnames';
import { typeText } from '@/shared/lib/typeText';
import cls from './TypedText.module.scss'

interface ITypedTextProps {
    texts: string[]
    className?: string
}

export const TypedText: React.FunctionComponent<ITypedTextProps> = ({
    texts,
    className
}) => {

    const id = useId()
    const cursorId = useId()

    useEffect(() => {
        const element = document.getElementById(id)
        const cursorElement = document.getElementById(cursorId)
        if (!element || !cursorElement) return
        typeText(element, cursorElement, 0, texts);

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id,cursorId])

    return (
        <h2 className={classNames(cls.container, className)}>
            <div id={id} className={cls.text}></div>
            <div id={cursorId} className={cls.cursor}></div>
        </h2>
    )
};