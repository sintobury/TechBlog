'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Switch () {
    const {theme, setTheme} = useTheme()
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        setIsLoaded(true);
    })

    if(!isLoaded) {
        return null;
    }

    return (
        <>
            {theme === 'light' &&
            <div onClick={()=>setTheme('dark')} > 
                <LightModeIcon sx={{'&:hover': { cursor:'pointer' }}}/>
            </div> 
            }
            {theme === 'dark' &&
            <div onClick={()=>setTheme('light')} >
                <DarkModeIcon sx={{'&:hover': { cursor:'pointer' }}}/>
            </div>
            }
        </>
    )
} 