import React, { useState, useEffect } from 'react';
import githubIcon from '../Images/github.svg';
import behanceIcon from '../Images/behance_icon.svg';
import linkedinIcon from '../Images/linkedin_icon.svg';
import burgerMenuIcon from '../Images/burger-menu-icon.svg';
import logo from '../Images/logo.png';
import './NavBar.css'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const connectButton = document.getElementById('connectButton');
        if (connectButton) {
            connectButton.addEventListener('click', () => {
                window.open('https://www.linkedin.com/in/kartik-bhatia-13a172229', '_blank');
            });
        }

        // Cleanup function to remove the event listener
        return () => {
            if (connectButton) {
                connectButton.removeEventListener('click', () => {
                    window.open('https://www.linkedin.com/in/kartik-bhatia-13a172229', '_blank');
                });
            }
        };
    }, []);
    return (
        <nav className="top-nav">
            <section className='sec1'>
                <span className='nav-logo'>
                    <a href='#home-sec'><img src={logo}></img></a>
                </span>
                <ul className={`link-to-sections ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href='#home-sec'>Home</a></li>
                    <li><a href='#skill-sec'>Skills</a></li>
                    <li><a href='#creation-sec' className='creationsText'>Creations</a></li>
                </ul>
            </section>
            <section className='sec2'>
                <ul className='social-icons'>
                    <li><a href='https://www.behance.net/kartikbhatia23' target="_blank"><img className='beh-icon' src={behanceIcon}></img></a></li>
                    <li><a href='https://github.com/karti3k' target="_blank"><img className='gith-icon' src={githubIcon}></img></a></li>
                    <li><a href='https://www.linkedin.com/in/kartik-bhatia-13a172229' target="_blank"><img className='linkedin-icon' src={linkedinIcon}></img></a></li>
                </ul>
                <span className='top-but-box'>
                    <button className='connect-but' id='connectButton'>
                        <span>&lt;--</span> LET'S CONNECT
                    </button>
                </span>
            </section>
            <section className='sec3'>
                <button onClick={toggleMenu}><img src={burgerMenuIcon} alt="Menu" /></button>
            </section>
            {isMenuOpen && (
                <section className='mobile-menu'>
                    <ul>
                        <li><a href='#home-sec' onClick={toggleMenu}>Home</a></li>
                        <li><a href='#skill-sec' onClick={toggleMenu}>Skills</a></li>
                        <li><a href='#creation-sec' onClick={toggleMenu}>Creations</a></li>
                        <li><a href='https://www.behance.net/kartikbhatia23' target="_blank" rel="noopener noreferrer"><img className='beh-icon' src={behanceIcon} alt="Behance" /></a></li>
                        <li><a href='https://github.com/karti3k' target="_blank" rel="noopener noreferrer"><img className='gith-icon' src={githubIcon} alt="GitHub" /></a></li>
                        <li><a href='https://www.linkedin.com/in/kartik-bhatia-13a172229' target="_blank" rel="noopener noreferrer"><img className='linkedin-icon' src={linkedinIcon} alt="LinkedIn" /></a></li>
                    </ul>
                </section>
            )}
        </nav>
    )
}
export default NavBar;