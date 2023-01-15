import React, { useRef, useEffect } from 'react';
import CardItem from './CardItem/CardItem';
import './Cards.css';
import { gsap, Power3, } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cards() {

    const cardsHeader = useRef(null);

    const list1 = useRef(null);
    const list2 = useRef(null);
    const list3 = useRef(null);

    useEffect(() => {

        gsap.from(cardsHeader.current, {
            scrollTrigger: cardsHeader.current,
            opacity: 0,
            duration: 2,
            y: 80,
            ease: Power3,
        })

        gsap.from(list1.current, {
            scrollTrigger: list1.current,
            opacity: 0,
            duration: 2,
            x: -60,
            ease: Power3,
        })

        gsap.from(list2.current, {
            scrollTrigger: list2.current,
            opacity: 0,
            duration: 2,
            x: 60,
            ease: Power3,
        })

        gsap.from(list3.current, {
            scrollTrigger: list3.current,
            opacity: 0,
            duration: 2,
            x: -60,
            ease: Power3,
        })

    }, [])

    return (
        <div className="cards">
            <h1 ref={cardsHeader}>Check out these Amazing Web Apps!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul ref={list1} className="cards__items">
                        <CardItem
                            src='images/E-Commerce.png'
                            text='E-Commerce website powerd by Commerce.js'
                            label='React/Material-ui'
                            path='https://ak-e-commerce.netlify.app/'
                            alt="e commerce website view"
                        />
                        <CardItem
                            src='images/Front-End-Dev.png'
                            text='Example for Portfilo'
                            label='Html/CSS/JS/GSAP'
                            path='https://ahmed-elbedfy.netlify.app/'
                            alt="portfilo website view"
                        />
                    </ul>
                    <ul ref={list2} className="cards__items">
                        <CardItem
                            src='images/TRVL.png'
                            text='TRVL Vacations offers website'
                            label='React'
                            path='https://react-trvl.netlify.app/'
                            alt="Travel website view"
                        />
                        <CardItem
                            src='images/Super-Chat-App.png'
                            text='public chat app With Google authentication'
                            label='React/Firebase'
                            path='https://ak-superchat.web.app/'
                            alt="chat app website view"
                        />
                    </ul>

                    <ul ref={list3} className="cards__items">
                        <CardItem
                            src='images/Keeper-App.png'
                            text='Note Keeper Clone'
                            label='React'
                            path='https://react-notes-keeper.netlify.app/'
                            alt="note keeper clone website view"
                        />
                        <CardItem
                            src='images/Manipulating-the-DOM.png'
                            text='I did make all functionality in this landing page for a Udacity Project'
                            label='Javascript'
                            path='https://js-landing-page2.netlify.app/'
                            alt="landing page view"
                        />
                        <CardItem
                            src='images/Simon.png'
                            text='Simon is a game made with Html/CSS/jQuery'
                            label='html/css/jQuery'
                            path='https://js-simon-game.netlify.app/'
                            alt="simon game website view"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;