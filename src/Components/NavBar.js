import navIcon1 from '../Images/nav-icon1.svg';
import navIcon2 from '../Images/nav-icon2.svg';
import navIcon3 from '../Images/nav-icon3.svg';
import logo from '../Images/logo.svg';
import './NavBar.css'

const NavBar = ()=>{
    return (
        <div>
            <nav className="top-nav">
                <section className='sec1'>
                <span className='nav-logo'>
                    <img src={logo}></img>
                </span>
                <ul className='link-to-sections'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Projects</a></li>
                </ul>
                </section>
                <section className='sec2'>
                <ul className='social-icons'>
                    <li><a href='#'><img src={navIcon1}></img></a></li>
                    <li><a href='#'><img src={navIcon2}></img></a></li>
                    <li><a href='#'><img src={navIcon3}></img></a></li>
                </ul>
                <span className='top-but-box'>
                <button className='connect-but'>
                    Let's connect
                </button>
                </span>
                </section>
            </nav>
        </div>
    )
}
export default NavBar;