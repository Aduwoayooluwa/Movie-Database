import { useState, useEffect } from 'react';


type Props = {}

const ThemeToggle = (props: Props) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? ("light"));
    const [isMounted, setIsMounted] = useState(false)
    
    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
    )
}

export default ThemeToggle