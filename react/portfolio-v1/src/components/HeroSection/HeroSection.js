import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';
import { gsap, Power3, Circ } from 'gsap';


function HeroSection() {

    // const awesomeArray = ["Talented", "Awesome", "Amazing"];
    // let [awesomeWord, setAwesomeWord] = useState("Talented");
    const meetArray = ["Meet", "Hire", "Reach", "Ask"];
    let [meetWord, setMeetWord] = useState("Meet");

    function changeText() {
        let i = 0;
        setInterval(() => {
            switch (i) {
                case 0:
                    // setAwesomeWord(awesomeArray[i]);
                    setMeetWord(meetArray[i]);
                    i++;
                    break;
                case 1:
                    // setAwesomeWord(awesomeArray[i]);
                    setMeetWord(meetArray[i]);
                    i++;
                    break;
                case 2:
                    // setAwesomeWord(awesomeArray[i]);
                    setMeetWord(meetArray[i]);
                    i++;
                    break;
                case 3:
                    // setAwesomeWord(awesomeArray[i]);
                    setMeetWord(meetArray[i]);
                    i = 0;
                    break;
                default:
                    console.log("No case match");
            }
        }, 1500)

    }

    // Animation

    const hero = useRef([]);
    const arrow = useRef(null);

    useEffect(() => {

        gsap.from(hero.current, {
            opacity: 0,
            duration: 2,
            y: 60,
            ease: Power3,
            stagger: "0.5"
        })

        let tl = gsap.timeline();

        tl.fromTo(arrow.current,
            {
                duration: 2,
                y: -10,
                ease: Circ,
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 4,
                y: 30,
                ease: Circ,
            })
            .to(arrow.current,
                {
                    opacity: 0,
                    duration: 1,
                    y: 100,
                    ease: Circ,
                }
            )

        changeText();

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="hero-padding" />
            <div className="hero">
                <div class="hero-container">
                    {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
                    <h1 ref={element => { hero.current[0] = element; }} className="hero-container--header">Search for <span className="primay-color">Talented</span> Frontend Developer</h1>
                    <h2 ref={element => { hero.current[1] = element; }} ><span className="primay-color">{meetWord}</span> Ahmed Khaled</h2>
                    <div ref={element => { hero.current[2] = element; }} className="hero-btns">
                        <Button className='btns'
                            buttonStyle="btn--outline"
                            buttonSize='btn--large'
                            buttonLink='/Ahmed Khaled - Frontend Developer.pdf'
                        >
                            Download Resume
                </Button>
                    </div>
                    {/* <div className="hero-btns">
                    <Button className='btns'
                    buttonStyle="btn--primary"
                    buttonSize='btn--large'
                    buttonLink='/Resume-Ahmed-Khaled.pdf'
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
                </div> */}
                    <div className="hero--down-arrow arrow-anim">&#11167;</div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
