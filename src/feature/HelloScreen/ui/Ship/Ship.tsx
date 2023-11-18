'use client'
import Image from 'next/image';
import { useEffect, useId } from 'react';
import ShipImage from '@/shared/assets/image/ship.png'
import { animateElement } from '@/shared/lib/animateElement';
import cls from './Ship.module.scss'

interface IShipProps {
}

export const Ship: React.FunctionComponent<IShipProps> = (props) => {

    const id = useId()

    useEffect(() => {
        const element = document.getElementById(id)
        if (!element) return
        const animationId = animateElement(element, 0.005, 20);

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [id])    
    
    return (
        <Image
            src={ShipImage.src}
            height={191}
            width={191}
            alt='ship'
            className={cls.ship}
            id={id}
        />
    )
};