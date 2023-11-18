'use client'
import Image from 'next/image';
import { useEffect, useId } from 'react';
import HelmetImage from '@/shared/assets/image/helmet.png'
import { animateElement } from '@/shared/lib/animateElement';
import cls from './Helmet.module.scss'

interface IHelmetProps {
}

export const Helmet: React.FunctionComponent<IHelmetProps> = (props) => {

    const id = useId()

    useEffect(() => {
        const element = document.getElementById(id)
        if (!element) return
        const animationId = animateElement(element, 0.01, 15);

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [id])
    
    return (
        <Image
            src={HelmetImage.src}
            height={246}
            width={246}
            alt='helmet'
            className={cls.helmet}
            id={id}
        />
    )
};