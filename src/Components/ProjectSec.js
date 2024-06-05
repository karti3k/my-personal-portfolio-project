import React, { useState } from 'react';
import './ProjectSec.css';
import newProjectImg1 from '../Images/newProjectImg1.jpg';
import newProjectImg2 from '../Images/newProjectImg2.jpg';
import newProjectImg3 from '../Images/newProjectImg3.jpg';
import newDesignImg1 from '../Images/newDesignImg1.jpg';
import newDesignImg2 from '../Images/newDesignImg2.jpg';
import newDesignImg3 from '../Images/newDesignImg3.jpg';
import newContentImg1 from '../Images/newContentImg1.jpg';
import newContentImg2 from '../Images/newContentImg2.jpg';
import newContentImg3 from '../Images/newContentImg3.jpg';
const ProjectSec = () => {
    const [selectedCategory, setSelectedCategory] = useState('tech');
    const [previousCategory, setPreviousCategory] = useState(null);

    const projects = {
        tech: [
            { img: newProjectImg1, link: 'https://github.com/karti3k/Employee-Activity-Dashboard/blob/main/README.md', text: 'GitHub' },
            { img: newProjectImg2, link: 'https://github.com/karti3k/MovieFinder/blob/main/README.md', text: 'GitHub' },
            { img: newProjectImg3, link: 'https://github.com/acmditu/ACM-Website', text: 'GitHub' },
        ],
        designs: [
            { img: newDesignImg1, link: 'https://www.behance.net/gallery/180831449/Expense-Manger-Web-App-UI-Design-Idea-', text: 'Behance' },
            { img: newDesignImg2, link: 'https://www.behance.net/gallery/184804873/Jainism-Website-Design-Idea', text: 'Behance' },
            { img: newDesignImg3, link: 'https://www.behance.net/gallery/179476323/Some-of-my-poster-designs-and-logo-designs', text: 'Behance' },
        ],
        content: [
            { img: newContentImg1, link: 'https://youtu.be/ZSl-AeR_eMo?si=4FsmqZoU26f_-ZmX', text: 'YouTube' },
            { img: newContentImg2, link: 'https://youtu.be/OKYskIJ3Z54?si=k7DlnA_NneE2lTdM', text: 'YouTube' },
            { img: newContentImg3, link: 'https://youtu.be/qe1jQE7SrjQ?si=0P8AAl_n8pveh9J4', text: 'YouTube' },
        ],
    };

    const handleButtonClick = (category) => {
        setPreviousCategory(selectedCategory);
        setSelectedCategory(category);
    };

    const renderProjects = () => {
        return projects[selectedCategory].map((project, index) => (
            <div key={index} className='projects'>
                <img src={project.img} alt={`project-${index}`} />
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.text}</a>
            </div>
        ));
    };

    return (
        <section className='project-sec'>
            <div className='project-sec-div'>
                <h2>Creations</h2>
                <div className='proj-bttns-div'>
                    <button 
                        className={`proj-bttn tech-btn ${selectedCategory === 'tech' ? 'active' : ''} ${previousCategory === 'tech' ? 'previous' : ''}`} 
                        onClick={() => handleButtonClick('tech')}
                    >
                        Tech
                    </button>
                    <button 
                        className={`proj-bttn designs-btn ${selectedCategory === 'designs' ? 'active' : ''} ${previousCategory === 'designs' ? 'previous' : ''}`} 
                        onClick={() => handleButtonClick('designs')}
                    >
                        Designs
                    </button>
                    <button 
                        className={`proj-bttn content-btn ${selectedCategory === 'content' ? 'active' : ''} ${previousCategory === 'content' ? 'previous' : ''}`} 
                        onClick={() => handleButtonClick('content')}
                    >
                        Content
                    </button>
                </div>
                <div className='project-img-div'>
                    {renderProjects()}
                </div>
            </div>
        </section>
    );
};

export default ProjectSec;