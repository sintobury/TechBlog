'use client'

import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes" 

export default function Provider({ children, ...props }:ThemeProviderProps) {
    return (
        <ThemeProvider attribute='class' defaultTheme="system" {...props}>
            {children}
        </ThemeProvider>
    )
}