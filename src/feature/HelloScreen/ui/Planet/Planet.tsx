'use client'

import Image from 'next/image';
import { useEffect, useId } from 'react';
import PlanetImage from '@/shared/assets/image/planet.png'
import { animateElement } from '@/shared/lib/animateElement';
import cls from './Planet.module.scss'

interface IPlanetProps {
}

export const Planet: React.FunctionComponent<IPlanetProps> = (props) => {

    const id = useId()

    useEffect(() => {
        const element = document.getElementById(id)
        if (!element) return
        const animationId = animateElement(element, 0.0075, 11);

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [id])

    return (
        <Image
            src={PlanetImage}
            height={167}
            width={167}
            alt='planet'
            className={cls.planet}
            id={id}
        />
    )
};