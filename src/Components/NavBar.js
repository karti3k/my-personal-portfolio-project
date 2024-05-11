import navIcon1 from '../Images/nav-icon1.svg';
import navIcon2 from '../Images/nav-icon2.svg';
import navIcon3 from '../Images/nav-icon3.svg';
import './NavBar.css'

const NavBar = ()=>{
    return (
        <div>
            <nav className="top-nav">
                <button className='connect-but'>
                    Let's connect
                </button>
                <ul className='social-icons'>
                    <li><a><img src={navIcon1}></img></a></li>
                    <li><a><img src={navIcon2}></img></a></li>
                    <li><a><img src={navIcon3}></img></a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;