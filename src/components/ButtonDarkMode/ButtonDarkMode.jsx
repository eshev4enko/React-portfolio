import React, {useEffect} from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';
import DetectDarkMode from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";

import "./style.css"

const ButtonDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', DetectDarkMode());

    const normalLight = 'dark-mode-btn';
    const darkLight = 'dark-mode-btn dark-mode-btn--active';

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

    }, [darkMode]);


    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";

                setDarkMode(newColorScheme);
            });
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <button className={darkMode === 'light' ? normalLight : darkLight} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

export default ButtonDarkMode;