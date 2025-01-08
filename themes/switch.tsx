'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Switch () {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true);
    },[])

    if(!mounted) {
        return null;
    }

    return (
        <>
            {theme === 'dark' ? 
                <div onClick={()=>setTheme('light')}>
                    <DarkModeIcon sx={{'&:hover': { cursor:'pointer' }}}/>
                </div> 
                : 
                <div onClick={()=>setTheme('dark')}>
                    <LightModeIcon sx={{'&:hover': { cursor:'pointer' }}}/>
                </div>}
        </>
    )
} 