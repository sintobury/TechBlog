'use client'

import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes" 

export default function Provider({ children, ...props }:ThemeProviderProps) {
    return (
        <ThemeProvider attribute='class' defaultTheme="system" {...props}>
            <ThemeReady />
            {children}
        </ThemeProvider>
    )
}

function ThemeReady() {
    if(typeof window !== "undefined"){
        document.documentElement.classList.add("theme-ready");
    }
    return null;
}