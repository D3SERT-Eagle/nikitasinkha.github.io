import React from "react";
import { useState, useEffect } from "react";
import ContactModal from "../Contact/modal";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import './header.scss'

function Header ({setCurrentTheme}) {
    const [theme, setTheme] = useState('dark')
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        setTheme(theme === 'dark'?'light':'dark')
        setCurrentTheme()
    }

    const handleProjectsClick = (e) => {
        e.preventDefault()
        const element = document.querySelector('.ProjectsContent');
        const headerOffset = 75; // height of your sticky header in px
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    const handleContact = (e) => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className="Header">
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <div className="HeaderNavContainer">
                <a onClick={(e)=>{e.preventDefault();window.scrollTo({top:'0', behavior:'smooth'})}} id="NavLink" href="#">Home</a>
                <a onClick={(e)=>handleProjectsClick(e)} id="NavLink" href="#">Projects</a>
                <a onClick={(e)=>handleContact(e)} id="NavLink" href="#">Contact</a>
                <DarkModeSwitch
                style={{ marginBottom: '0' }}
                checked={!isDarkMode}
                onChange={toggleDarkMode}
                size={30}
                />
                {/* <img id="NavPicture" src={theme === 'dark'?Day:Night} onClick={()=>{setTheme(theme === 'dark'?'light':'dark');setCurrentTheme()}}/> */}
            </div>
        </div>
    )
}

export default Header;