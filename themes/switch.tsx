'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Switch () {
    const {theme, setTheme} = useTheme()
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        setIsLoaded(true);
    })

    if(!isLoaded) {
        return null;
    }

    const LightModeIcon = () => (
        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" x2="12" y1="1" y2="3"/>
            <line x1="12" x2="12" y1="21" y2="23"/>
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>
            <line x1="1" x2="3" y1="12" y2="12"/>
            <line x1="21" x2="23" y1="12" y2="12"/>
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>
        </svg>
    )

    const DarkModeIcon = () => (
        <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z"/>
        </svg>
    )

    return (
        <>
            {theme === 'light' &&
            <button onClick={()=>setTheme('dark')} className="hover:cursor-pointer"> 
                <LightModeIcon />
            </button> 
            }
            {theme === 'dark' &&
            <button onClick={()=>setTheme('light')} className="hover:cursor-pointer" >
                <DarkModeIcon />
            </button>
            }
        </>
    )
} 