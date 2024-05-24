import './ProjectSec.css';
import projimg1 from '../Images/p3.png';
import projimg2 from '../Images/p2.png';
import projimg3 from '../Images/p4.png';

const ProjectSec = () => {
    return (
        <section className='project-sec'>
            <div className='project-sec-div'>
                <h2>Creations</h2>
                <div className='proj-bttns-div'>
                    <button className='proj-bttn tech-btn'>Tech</button>
                    <button className='proj-bttn designs-btn'>Designs</button>
                    <button className='proj-bttn content-btn'>Content</button>
                </div>
                <div className='project-img-div'>
                    <div className='projects'><img src={projimg2}></img><a>GitHub</a></div>
                    <div className='projects'><img src={projimg3}></img><a>GitHub</a></div>
                    <div className='projects '><img className='proj-img-3' src={projimg1}></img><a>GitHub</a></div>
                </div>
            </div>
        </section>
    )
}
export default ProjectSec;