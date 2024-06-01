import githubIcon from '../Images/github.svg';
import behanceIcon from '../Images/behance_icon.svg';
import linkedinIcon from '../Images/linkedin_icon.svg';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className='foot-div'>
                <div><p className='foot-connect-text'>Let's connect!</p>
                <ul className='footer-social-icons'>
                    <li><a href='https://www.behance.net/kartikbhatia23' target="_blank"><img className='foot-beh-icon' src={behanceIcon}></img></a></li>
                    <li><a href='https://github.com/karti3k' target="_blank"><img className='foot-gith-icon' src={githubIcon}></img></a></li>
                    <li><a href='https://www.linkedin.com/in/kartik-bhatia-13a172229' target="_blank"><img className='foot-linkedin-icon' src={linkedinIcon}></img></a></li>
                </ul>
                </div>
                <div className='last-line'>
                    <ul>
                        <li className='foot-gototop'><a href='#home-sec'>Go To Top</a></li>
                        <div className='vertical-line'></div>
                        <li className='foot-skills-navigation'><a href='#skill-sec'>Go To Skills</a></li>
                        <div className='vertical-line'></div>
                        <li className='foot-creations-navigation'><a href='#creation-sec'>Go To Creations</a></li>
                    </ul>
                    <p className='copyright'>&copy; 2024 Kartik Bhatia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;