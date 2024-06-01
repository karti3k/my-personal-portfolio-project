import React, { useState } from 'react';
import './ProjectSec.css';
import projImg6 from '../Images/projImg6.jpg';
import projImg8 from '../Images/projImg8.jpg';
import projImg4 from '../Images/projImg4.jpg';
import designimg1 from '../Images/designimg1.jpg';
import designimg2 from '../Images/designimg2.jpg';
import designimg3 from '../Images/designimg3.jpg';
import contImg4 from '../Images/contImg4.jpg';
import contImg6 from '../Images/contImg6.jpg';
import contImg8 from '../Images/contImg8.jpg';
const ProjectSec = () => {
    const [selectedCategory, setSelectedCategory] = useState('tech');
    const [previousCategory, setPreviousCategory] = useState(null);

    const projects = {
        tech: [
            { img: projImg4, link: 'https://github.com/karti3k/Employee-Activity-Dashboard/blob/main/README.md', text: 'GitHub' },
            { img: projImg6, link: 'https://github.com/karti3k/MovieFinder/blob/main/README.md', text: 'GitHub' },
            { img: projImg8, link: 'https://github.com/acmditu/ACM-Website', text: 'GitHub' },
        ],
        designs: [
            { img: designimg1, link: 'https://www.behance.net/gallery/184804873/Jainism-Website-Design-Idea', text: 'Behance' },
            { img: designimg2, link: 'https://www.behance.net/gallery/180831449/Expense-Manger-Web-App-UI-Design-Idea-', text: 'Behance' },
            { img: designimg3, link: 'https://www.behance.net/gallery/179476323/Some-of-my-poster-designs-and-logo-designs', text: 'Behance' },
        ],
        content: [
            { img: contImg4, link: 'https://youtu.be/ZSl-AeR_eMo?si=4FsmqZoU26f_-ZmX', text: 'YouTube' },
            { img: contImg6, link: 'https://youtu.be/OKYskIJ3Z54?si=k7DlnA_NneE2lTdM', text: 'YouTube' },
            { img: contImg8, link: 'https://youtu.be/qe1jQE7SrjQ?si=0P8AAl_n8pveh9J4', text: 'YouTube' },
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