import React, { useRef, useEffect } from 'react';
import { gsap, Power3, } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CardItem(props) {

    const listItems = useRef([]);

    useEffect(() => {

        gsap.from(listItems.current, {
            scrollTrigger: listItems.current,
            opacity: 0,
            duration: 2,
            y: 80,
            ease: Power3,
        })

    }, [])

    return (
        <>
            <li ref={listItems} className="cards__item">
                <a className="cards__item__link" rel="noopener noreferrer" target="_blank" href={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.alt} className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h2 className="cards__item__text">
                            {props.text}
                        </h2>
                    </div>
                </a>
            </li>
        </>
    )
}

export default CardItem;
