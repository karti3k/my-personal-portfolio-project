import React, { useState, useEffect } from 'react';
import './Banner.css';
import headerImg from '../Images/header-img.svg';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Front-End Developer", "Graphic Designer", "Content Creator"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <main className='main-sec'>
            <section className='main-sub-sec1'>
               
                <span className='main-text'>
                        <h1>{`Hi! I'm Kartik Bhatia`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-End Developer", "Graphic Designer", "Content Creator" ]'><span className="wrap">{text}</span></span></h1>
                        <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                </span>
            </section>
            <section className='main-sub-sec2'>
                <img src={headerImg}></img>
            </section>
        </main>
    )
}
export default Banner;