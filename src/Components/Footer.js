import navIcon1 from '../Images/nav-icon1.svg';
import navIcon2 from '../Images/nav-icon2.svg';
import navIcon3 from '../Images/nav-icon3.svg';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className='foot-div'>
                <div className='last-line'>
                    <ul>
                        <li><a href='#'>Go To Top</a></li>
                        <div className='vertical-line'></div>
                        <li><a href='#'>Go To Skills</a></li>
                        <div className='vertical-line'></div>
                        <li><a href='#'>Go To Creations</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;