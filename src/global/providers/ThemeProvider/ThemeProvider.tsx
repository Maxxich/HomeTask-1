'use client'

import { ReactNode, useEffect } from 'react'
export enum Theme  {
    VIOLET ='app_violet_theme'
}

interface ThemeProviderProps {
    theme?: Theme;
    children: ReactNode;
}


const ThemeProvider = ({
    children, theme = Theme.VIOLET
} : ThemeProviderProps) => {

    useEffect(() => {
        document.body.classList.add(theme)
    }, [theme])


    return children
}

export default ThemeProvider
