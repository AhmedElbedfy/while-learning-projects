import React, { useRef, useEffect } from 'react';
import './AboutMe.css';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function AboutMe() {

    const aboutHead = useRef([]);
    const headImage = useRef(null);

    const infoText = useRef([]);
    const infoP = useRef(null);

    const infoContact = useRef(null);
    const infoContactItems = useRef([]);

    const skillsHead = useRef(null);
    const skillsText = useRef([]);
    const skillsIcon = useRef([]);

    const forMore = useRef(null);

    useEffect(() => {

        gsap.from(aboutHead.current, {
            opacity: 0,
            duration: 1,
            x: -60,
            ease: Power3,
            stagger: "0.5"
        })

        gsap.from(headImage.current, {
            opacity: 0,
            duration: 1,
            x: 60,
            ease: Power3,
        })

        gsap.from(infoP.current, {
            opacity: 0,
            duration: 1,
            x: -60,
            ease: Power3,
        })

        infoText.current.forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                duration: 1,
                y: 60,
                ease: Power3,
                stagger: "0.3",
                scrollTrigger: item,
            })
        })

        gsap.from(infoContact.current, {
            opacity: 0,
            duration: 1,
            x: 60,
            y: 60,
            ease: Power3,
            scrollTrigger: infoText.current,
        })

        gsap.from(infoContactItems.current, {
            opacity: 0,
            duration: 1,
            y: 60,
            ease: Power3,
            stagger: "0.5",
            scrollTrigger: infoText.current,
        })

        //skills

        gsap.from(skillsHead.current, {
            opacity: 0,
            duration: 1,
            y: 60,
            x: -60,
            ease: Power3,
            stagger: "0.5",
            scrollTrigger: skillsHead.current,
        })


        skillsText.current.forEach(line => {
            gsap.from(line, {
                opacity: 0,
                duration: 1,
                y: 60,
                x: -60,
                ease: Power3,
                stagger: "0.5",
                scrollTrigger: line,
            })
        })

        skillsIcon.current.forEach((item) => {
            gsap.from(item, {
                scrollTrigger: item,
                opacity: 0,
                duration: 1,
                x: 18,
                y: 70,
                ease: Power3,
                stagger: "0.4",
            })
        })

        // More Info

        gsap.from(forMore.current, {
            opacity: 0,
            duration: 2,
            y: 60,
            x: -90,
            ease: Power3,
            stagger: "0.5",
            scrollTrigger: forMore.current,
        })


    }, [])


    return (
        <div className="about-me">
            <div className="about-me--container">
                <div className="about-me--head-container end">
                    <div className="about-me--head">

                        <h1 ref={element => (aboutHead.current[0] = element)} className="about-me--name">Ahmed Khaled</h1>
                        <h2 ref={element => (aboutHead.current[1] = element)} className="about-me--job-title">Frontend Developer</h2>

                    </div>
                    <img ref={headImage} src="images/aboutme2.png" alt="Ahmed Khaled Frontend Developer" className="about-me--img" />

                </div>

                <section className="about-me--info">
                    <p ref={infoP} className="about-me--info-text">
                        <span ref={element => (infoText.current[0] = element)}>
                            Hi Everyone
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[1] = element)}>
                            This is The Story of How I got hooked into Software Development it all starts When I was a kid I enjoyed computer games so much, and I always wonder how Computers work?                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[2] = element)}>
                            Let me introduce you to how I found out. In 2016 I asked a friend of mine who was a computer science student how computers work?
                        </span>
                        <br />
                        <span ref={element => (infoText.current[3] = element)}>
                            and he explained some Zeros and 1’s stuff to me, and he introduced me to the HTML/CSS tutorial and we talked about how the web work.                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[4] = element)}>
                            at this time a became a student at the faculty of commerce at Helwan university which I will later major in Economics and graduate in 2020.
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[5] = element)}>
                            Back in 2016, I made some cool websites for fun and learning purpose with HTML and CSS later I tried to learn javascript this time it was frustrated, and the tutorial I was learning from wasn’t really for the beginner so I stopped and concentrated more on academic study and got a job at event planning, Which I learn a lot from it like how to lead a small team how to work with the team effectively, time planning, and how to deal with urgent problems.
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[6] = element)}>
                            In 2019 I decided to continue my learning journey in web development and computer science so I got some skills and became familiar with topics like Python, javascript, CS, bootstrap, jQuery, git, node, express, React.js, and many more.
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[7] = element)}>
                            I have to say for me learning how to code was so challenging, rewarding, and fun I still remember the moment I produced “Hello World” in the console of my first application, or the first snake game I made with Python I knew I was hooked into the world of software development.
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[8] = element)}>
                            This is my learning journey to become a front-end developer a real passioned one, but web and Computer science isn’t my only passion, I also have passion for Economics, entrepreneurship, How big companies work, and learning new stuff, I’m residing at sites like Coursera, Udacity, Udemy, and many more.
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[9] = element)}>
                            I also joined some activities from 2019 and 2020 where I met awesome people, learn awesome skills, and became familiar with many awesome topics. And today I’m building my portfolio to Breaking into the job market.
                    </span>
                        <br />
                        <br />
                        <span ref={element => (infoText.current[10] = element)}>
                            Thank you for reading hope this Summary introduces me very well.
                    </span>
                    </p>

                    <div ref={infoContact} className="about-me--contact-me">
                        <h2 className="about-me--contact-me-head end sub-title">Contact Me</h2>
                        <p ref={element => (infoContactItems.current[0] = element)} >Sphinx St - Mashal</p>
                        <br />
                        <p ref={element => (infoContactItems.current[1] = element)}>Giza/Egypt</p>
                        <br />

                        <p ref={element => (infoContactItems.current[2] = element)}>Post/Zip Code 12557</p>
                        <br />
                        <p ref={element => (infoContactItems.current[3] = element)}>01159593645</p>
                        <br />
                        <p ref={element => (infoContactItems.current[4] = element)}>ahmed.khaled.hussain@gmail.com</p>
                    </div>
                    <div>
                    </div>
                </section>

                <section className="about-me--skills">
                    <h2 ref={skillsHead} className="end sub-title">
                        skills
                </h2>
                    <div className="about-me--skills-container">
                        <div className="skills-text">

                            <h3 ref={element => { skillsText.current[21] = element; }}>tools I work with it recently:</h3>
                            <br />
                            <ul>
                                <li ref={element => { skillsText.current[9] = element; }}>
                                    Git/GitHub.
                            </li>
                                <li ref={element => { skillsText.current[10] = element; }}>
                                    Html/CSS/JavaScript.
                            </li>
                                <li ref={element => { skillsText.current[11] = element; }}>
                                    Sass/Bootstrap/jQuery.
                            </li>
                                <li ref={element => { skillsText.current[12] = element; }}>
                                    React/Material-UI.
                            </li>
                            </ul>
                            <br />
                            <br />

                            <h3 ref={element => { skillsText.current[22] = element; }}>I have a good base in these tools/topics as well:</h3>
                            <br />

                            <ul>
                                <li ref={element => { skillsText.current[13] = element; }}>
                                    Python.
                            </li>
                                <li ref={element => { skillsText.current[14] = element; }}>
                                    Node.js, Express.js, and NPM.
                            </li>
                                <li ref={element => { skillsText.current[15] = element; }}>
                                    Firebase.
                            </li>
                                <li ref={element => { skillsText.current[16] = element; }}>
                                    EJS - Embedded JavaScript templating.
                            </li>
                                <li ref={element => { skillsText.current[17] = element; }}>
                                    Computer Science concepts.
                            </li>
                                <li ref={element => { skillsText.current[18] = element; }}>
                                    Working with APIs.
                            </li>
                                <li ref={element => { skillsText.current[23] = element; }}>
                                    (OOP) Object Oriented Programming in JavaScript.
                            </li>
                            </ul>
                            <br />
                            <br />

                            <h3 ref={element => { skillsText.current[20] = element; }}>I have a practical understanding of these Concepts/Skills:</h3>
                            <br />

                            <ul>
                                <li ref={element => { skillsText.current[6] = element; }}>
                                    Search engine optimization (SEO) the developer part.
                            </li>
                                <li ref={element => { skillsText.current[1] = element; }}>
                                    Proficient understanding of web markup, including HTML5, CSS3.
                            </li>
                                <li ref={element => { skillsText.current[8] = element; }}>
                                    practical understanding of code versioning tools (Git/GitHub).
                            </li>
                                <li ref={element => { skillsText.current[3] = element; }}>
                                    Basic understanding of server-side CSS pre-processing platforms, SASS.
                            </li>
                                <li ref={element => { skillsText.current[4] = element; }}>
                                    Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery and React.
                            </li>
                                <li ref={element => { skillsText.current[7] = element; }}>
                                    understanding of how tools as Figma and Adobe XD work and how to cooperate with the UI/UX designer to achieve the work.
                            </li>
                                <li ref={element => { skillsText.current[5] = element; }}>
                                    Making web application responsive in case of all screen sizes using native CSS (media queries) or libraries like bootstrap/material-UI.
                            </li>
                            </ul>
                            <br />
                            <br />

                        </div>
                        <div className="skills-imgs">

                            {/* Html */}
                            <svg ref={element => { skillsIcon.current[0] = element; }} class="skills-img" width="1773" height="2500" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path fill="#fff" d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>

                            {/* CSS */}
                            <svg ref={element => { skillsIcon.current[1] = element; }} class="skills-img" enable-background="new 0 0 1771 2499.8" viewBox="0 0 1771 2499.8" xmlns="http://www.w3.org/2000/svg"><path d="m1387.8 92.5h-146.9l152.8 165.9v78.9h-314.8v-92.4h152.8l-152.8-165.9v-79h309zm-371.4 0h-147.1l153 165.9v78.9h-314.9v-92.4h152.8l-152.8-165.9v-79h309zm-367.8 3.8h-158.5v144.8h158.5v96.3h-271.3v-337.4h271.3z" fill="#fff" /><path d="m161.2 2299.1-161.2-1807.7h1771l-161.4 1807.4-725.2 201z" fill="#1572b6" /><path d="m885.5 2346.2 586-162.5 137.8-1544.5h-723.8z" fill="#33a9dc" /><path d="m885.5 1294.1h293.4l20.2-227h-313.6v-221.6h556l-5.3 59.5-54.5 611h-496.2z" fill="#fff" /><path d="m886.7 1869.9h-1l-246.9-66.7-15.8-176.8h-222.4l31.1 348.1 454.2 126.4h1.3v-231z" fill="#ebebeb" /><path d="m1160.1 1506.3-26.7 296.7-247.3 66.7v231l454.5-126 3.3-37.5 38.6-431h-222.4z" fill="#fff" /><path d="m886.3 845.5v221.7h-535.4l-4.6-49.8-10.1-112.4-5.3-59.5zm-.8 448.6v221.7h-244.1l-4.3-49.8-10.1-112.4-5.3-59.5h263.7z" fill="#ebebeb" /></svg>

                            {/* javascript */}
                            <svg ref={element => { skillsIcon.current[2] = element; }} class="skills-img" enable-background="new 0 0 1776 2500" viewBox="0 0 1776 2500" xmlns="http://www.w3.org/2000/svg"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329" /><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22" /><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff" /><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb" /><path d="m715.2 223.6h-158.1v113.5h271.2v-337.1h-113.1zm503.6-221.8h-275.6v118c36.8 36.8 56 54.5 110.2 107.8h-110.2v107.6h275.6v-107.4l-110.2-107.8h110.2z" fill="#fff" /></svg>

                            {/* React */}
                            <svg ref={element => { skillsIcon.current[4] = element; }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="react" class="skills-img svg-inline--fa fa-react fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#08D9FF" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>

                            {/* Git */}
                            <svg ref={element => { skillsIcon.current[5] = element; }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="git-alt" class="skills-img svg-inline--fa fa-git-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F03C2E" d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path></svg>

                            {/* GitHub */}
                            <svg ref={element => { skillsIcon.current[6] = element; }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="skills-img svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>

                            {/* Python */}
                            <svg ref={element => { skillsIcon.current[7] = element; }} class="skills-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96" /><stop offset="1" stop-color="#3679b0" /></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836" /><stop offset="1" stop-color="#ffe873" /></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)" /><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)" /><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff" /></g></svg>

                            {/* Bootstrap */}
                            <svg ref={element => { skillsIcon.current[3] = element; }} class="skills-img" width="2500" height="2500" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C" /><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF" /></svg>

                            {/* SASS */}
                            <svg ref={element => { skillsIcon.current[8] = element; }} class="skills-img" width="2184" height="2500" viewBox="0 0 256 293" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M78.67 179.029c-4.65 2.907-11.656 7.619-17.076 12.743-8.898 8.403-10.76 20.059-6.066 22.782 4.342 2.517 14.479-.478 21.734-8.392 7.614-8.308 10.754-18.84 7.511-30.796-.381.227-.755.455-1.122.667l.008.017-.492.278c-1.893 1.13-3.44 2.063-4.497 2.7zm130.671-3.773c-2.634 5.725-2.766 7.566-1.966 8.14 3.822-1.373 10.145-4.682 10.195-13.55.008-1.328-.285-2.752-.755-4.242-4.086 3.618-6.441 7.406-7.474 9.652zm41.01-17.306c-10.21-1.19-18.177.242-24.36 2.818 1.145 2.98 2.025 6.083 2.149 9.21.287 6.863-4.437 11.942-9.36 15.569-2.875 2.114-5.934 3.523-8.502 4.374-2.053.865-4.782 1.76-6.719 1.365-4.27-.868-6.543-4.66-3.638-13.028 1.569-4.528 6.095-11.42 13.401-17.358-1.665-3.428-3.521-6.92-4.467-10.13-1.864-6.326-2.427-10.15-2.427-10.15s-6.022 12.486-13.791 23.84c-.448.66-.895 1.306-1.343 1.951 1.526 3.547 2.728 7.297 2.891 11.077.286 6.863-2.685 12.052-7.615 15.67-2.669 1.968-5.516 3.327-7.959 4.192-1.562.681-4.739 1.804-9.257 2.106-2.471.169-4.848.016-6.175-.99-1.827-1.38-2.047-3.084-1.101-5.41.8-1.976 6.785-8.808 11.803-14.79a123.815 123.815 0 0 0 3.887-4.903l-.029-.066s.909-1.173 2.384-3.221c-1.834-3.95-4.159-8.06-5.252-11.788-1.864-6.327-2.428-10.151-2.428-10.151s-6.104 15.649-12.463 28.14c-4.921 9.675-8.208 15.538-9.689 18.108l-.015.103s-.221.375-.602.962l-.285.476-.008-.044c-1.651 2.438-5.355 7.214-9.037 7.214-10.108 0-6.397-20.529-6.397-20.529s-2.955 7.605-6.286 14.13c-2.713 5.32-5.185 9.828-10.591 9.828-1.555 0-4.02-.044-6.067-1.99-4.643-4.411-8.193-15.612-7.497-24.287.594-7.376 1.731-12.486 3.286-16.748a336.981 336.981 0 0 0-9.242 5.219l-5.018 2.957.162.294c4.151 8.03 5.259 25.623-3.793 39.127-9.051 13.512-25.9 21.733-42.316 17.168-5.297-1.475-13.299-12.433-6.397-27.707 6.088-13.47 30.419-26.203 36.831-29.381l1.76-.97c-12.784-11.185-44.708-26.275-49.182-49.454-1.262-6.525 1.797-22.13 20.956-40.067 16.115-15.084 38.532-26.637 59.24-33.999 34.79-12.366 71.548-5.072 77.203 17.11 5.56 21.814-13.364 47.907-37.6 57.287-21.639 8.374-39.53 7.046-46.88 4.632-8.355-2.745-13.255-8.258-14.45-11.37-.47-1.219-1.278-3.266 0-3.97.784-.434 1.099-.33 3.197 1.989 1.996 2.202 10.02 8.11 25.263 6.4 40-4.484 64.095-35.584 56.481-52.319-5.332-11.713-36.162-16.998-74.68 2.21-47.019 23.442-49.571 42.768-49.974 50.108-1.101 20.192 24.902 30.813 38.972 45.829l.542.595c2.633-1.453 5.414-2.987 8.142-4.484a8176.293 8176.293 0 0 1 16.901-9.258c4.952-7.197 15-15.14 22.255-15.14 11.597 0 7.614 16.668 7.614 16.668s.235-.762.55-.77c.33-.008 1.607-2.196 5.187-.89 3.682 1.352 2.845 3.936 2.868 4.2.044.512-4.35 15.331-6.176 24.837-.874 4.536-.368 7.84-.11 7.84.359 0 1.093-1.154 1.775-2.393l-.015-.037s.513-.94 1.372-2.627l.169-.353.007.016a213.875 213.875 0 0 0 4.078-8.507c3.22-7.097 15.506-34.498 16.548-37.528 1.041-3.031 1.584-6.166 2.098-7.51.506-1.343 4.849-2.356 9.924-2.319 5.076.037 5.591 2.203 5.626 2.65.037.447-2.413 6.46-2.978 10.709-.557 4.25-.021 6.37.441 9.938.301 2.333 1.76 5.292 3.485 8.645 5.252-8.588 14.493-25.013 15.381-29.615.608-3.148 1.584-6.165 2.098-7.51.513-1.343 4.849-2.355 9.924-2.319 5.076.038 5.589 2.203 5.626 2.65.037.448-2.421 6.46-2.978 10.71-.558 4.242-.021 6.37.44 9.938.397 3.052 2.758 7.155 5.099 11.822 6.388-3.148 13.907-5.261 22.71-5.305 3.645-.022 7.878.344 10.064 1.026V80.055c0-4.954-2.539-9.52-6.829-11.993L134.616 1.855a13.78 13.78 0 0 0-13.812 0L6.573 68.03C2.289 70.504 0 75.076 0 80.022v132.47c0 4.946 2.303 9.519 6.58 11.992l114.415 66.225a13.645 13.645 0 0 0 13.76 0l114.467-66.226c4.283-2.48 6.778-7.047 6.778-11.992v-53.536c-1.453-.428-3.58-.765-5.649-1.006zm-123.232-6.938c-2.457 2.752-6.645 9.85-8.604 15.79-3.895 11.793-2.208 23.78.55 24.5 3.22.843 8.502-14.922 11.031-21.088 1.585-3.862 7.747-20.999 6.397-23.288-1.054-1.791-5.42-.345-9.374 4.087zm44.563 39.752s-.777.736-.441.94c.455.272 1.438-.08 2.509-.639 3.03-1.906 9.829-6.663 9.844-13.702 0-.206-.008-.404-.022-.617a276.359 276.359 0 0 1-4.284 5.475c-2.142 2.665-7.606 8.543-7.606 8.543z" fill="#8CC84B" /></svg>

                            {/* VS Code */}
                            <svg ref={element => { skillsIcon.current[9] = element; }} class="skills-img" height="2455" viewBox="-11.9 -2 1003.9 995.6" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z" fill="#2489ca" /><path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z" fill="#1070b3" /><path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" fill="#0877b9" /><path d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z" fill="#3c99d4" /></svg>

                            {/* jQuery */}
                            {/* <svg ref={element => { skillsIcon.current[8] = element; }} height="150" width="150" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.945094 0 0 .945094 6.301403 4.347014)"><path d="m20.44 13.78c-5.283 7.733-4.625 17.793-.6 26l.296.585.2.37c.037.072.08.143.118.213.07.13.14.255.2.383l.385.673.22.37.447.712.2.3c.2.32.426.638.648.952.005.008.012.017.018.025.035.05.074.1.1.15.192.27.4.536.6.8l.222.288.545.682.208.254a31.65 31.65 0 0 0 .76.884l.016.016c.01.013.02.02.03.033a23.73 23.73 0 0 0 .772.83l.248.254.617.616.252.244a34.49 34.49 0 0 0 .845.783l.16.14.767.66.318.258.64.5.342.265.978.715c.025.017.047.035.072.052.23.16.463.315.697.47l.302.205 1.092.68.302.173.82.468c.15.082.303.16.453.238l.586.3.135.066.24.118.93.438.197.1a32.93 32.93 0 0 0 1.084.459l.264.106 1.023.386.128.046a34.62 34.62 0 0 0 1.14.38l.275.084c.4.12.775.263 1.177.34 25.548 4.756 32.971-15.626 32.971-15.626-6.233 8.27-17.296 10.45-27.778 8.023-.397-.1-.782-.217-1.17-.334l-.292-.1c-.378-.118-.754-.243-1.126-.373l-.155-.057a35.02 35.02 0 0 1 -.993-.375l-.28-.112a31.57 31.57 0 0 1 -1.072-.454l-.214-.096-.904-.43-.26-.128a30.9 30.9 0 0 1 -.7-.363l-.467-.25a26.89 26.89 0 0 1 -.838-.479l-.283-.16c-.368-.22-.732-.45-1.092-.68-.1-.065-.196-.134-.295-.2l-.777-.526-.25-.18-.735-.54-.326-.25-.663-.528-.296-.24-.825-.7c-.028-.025-.06-.05-.1-.077-.294-.263-.583-.533-.868-.804l-.244-.24-.624-.622-.244-.25a31.33 31.33 0 0 1 -.765-.824c-.012-.014-.026-.027-.038-.04a31.49 31.49 0 0 1 -.776-.9l-.203-.246-.56-.703-.205-.26-.645-.875c-5.82-8.085-7.9-19.235-3.26-28.393m12.283-1.188c-3.82 5.6-3.613 13.094-.633 19.016a24.87 24.87 0 0 0 1.69 2.873c.572.835 1.207 1.83 1.967 2.5.275.3.563.6.857.906.074.077.15.15.226.227a25.21 25.21 0 0 0 .876.829c.012.01.023.022.036.032a26.31 26.31 0 0 0 1.031.87l.232.184a25.13 25.13 0 0 0 1.07.796.6.6 0 0 0 .03.023c.16.113.325.22.488.328.078.052.152.107.23.156a21.65 21.65 0 0 0 .793.495l.112.066.7.4c.082.047.166.088.25.132l.5.258c.025.013.05.023.074.035.337.17.676.33 1.023.485.074.033.15.063.226.095.277.12.557.236.84.347l.36.134a26.33 26.33 0 0 0 .77.273l.348.113c.367.117.73.263 1.113.328 19.725 3.328 24.28-12.14 24.28-12.14-4.105 6.02-12.054 8.894-20.538 6.652a21.09 21.09 0 0 1 -1.117-.33c-.113-.035-.224-.072-.336-.1a22.36 22.36 0 0 1 -.781-.274l-.353-.134c-.283-.1-.563-.225-.84-.345-.076-.033-.152-.063-.227-.098a19.53 19.53 0 0 1 -1.03-.487c-.174-.087-.345-.178-.516-.268l-.298-.156a20.05 20.05 0 0 1 -.653-.375l-.156-.1a25.46 25.46 0 0 1 -.79-.492c-.08-.052-.158-.1-.238-.162l-.512-.345a27.46 27.46 0 0 1 -1.066-.794l-.24-.192c-3.713-2.986-6.657-7.066-8.056-11.693-1.467-4.8-1.15-10.185 1.4-14.556m10.648-.38c-2.252 3.376-2.473 7.568-.9 11.296 1.648 3.957 5.025 7.062 8.966 8.533.162.062.325.117.5.173l.216.07c.232.074.463.16.702.206 10.892 2.143 13.846-5.692 14.632-6.845-2.588 3.795-6.937 4.706-12.273 3.387-.42-.105-.885-.26-1.3-.406a15.62 15.62 0 0 1 -1.533-.649 15.81 15.81 0 0 1 -2.688-1.671c-4.785-3.69-7.752-10.728-4.636-16.46" fill="#0868ac" /><g fill="#131b28"><path d="m26.576 74.06-.738 2.616.738-2.615zm3.796 5.678-.813-.005zm-.2 3.906-4.872.018zm1.02-3.9-.814-.005zm-.582 3.568.85-3.237zm17.93-14.907-1.58 7.433zm-4.065 0-1.2 5.553z" /><path d="m48.26 68.07h-3.38c-.188 0-.374.15-.414.334l-2.4 11.107c-.04.183-.226.333-.413.333h-2.393c-2.368 0-2.094-1.637-1.6-3.88l.015-.068.287-1.53.124-.63 1.092-5.332c.038-.184-.085-.335-.273-.335h-3.47a.44.44 0 0 0 -.412.334l-1.563 7.414c-.86 3.924-.632 7.666 4.04 7.783l.135.003h7.332c.188 0 .373-.15.413-.334l3.162-14.866c.04-.184-.083-.334-.27-.334zm13.487 11.813c.188 0 .3.15.273.334l-.328 1.605m-.328 1.606.328-1.606zm-.412.338-6.23.03z" /><path d="m52.704 77.817c-.003-.176.197-.478.385-.478l-.422-.007c-.2 1.914.037.485.037.485zm2.326 5.978h-.065zm6.717-3.912c.188 0 .3.15.273.334l-.382 1.866m-5.008 1.717h-.014zm-.83-.006h-.048zm-.253.001h-.08zm-.247 0h-.07zm.462-.001h-.205z" /><path d="m56.617 83.8-.816.003zm4.337-.025-4.325.026zm.4-.347.275-1.344-.275 1.345zm-5.896.367h-.158.178zm-.495 0h-.24zm.257 0h-.2zm-49.46-5.938.525-2.328-.6 2.66-.07.334.146-.668zm6.286-9.825h-3.713a.45.45 0 0 0 -.417.333l-.704 3.1a.26.26 0 0 0 .266.333h3.742c.188 0 .374-.15.414-.333l.68-3.107c.04-.183-.08-.333-.27-.333zm-.808 5.168-1.1 5.038zm-10.786 16.695 3.062.024c-.904 0-2.397-.017-3.063-.025z" /><path d="m6.8 73.2-.526 2.328zm4.17-.333h-3.743a.45.45 0 0 0 -.417.333l-1.05 4.656-.146.668-1 4.753a7.16 7.16 0 0 1 -.18.657s-.7 2.08-1.874 2.057l-1.165-.022a.45.45 0 0 0 -.42.326l-.775 3.263a.26.26 0 0 0 .261.336l3.063.025c2.936 0 4.483-1.627 5.476-6.307l2.25-10.4c.04-.183-.082-.333-.27-.333zm53.162 10.738c-.188 0-.3-.15-.27-.334l2.815-13.186m1.367 13.185 1.14-5.628z" /><path d="m63.903 83.438c-.023-.092-.01-.317.03-.5l1.336-6.26-1.408 6.593c-.04.184.082.334.27.334h.342c-.188 0-.548-.075-.57-.167zm3.92.092c-.102.04-.34.075-.528.075h.342a.44.44 0 0 0 .41-.335l.068-.334c-.037.184-.2.553-.3.594zm.79-3.074.503-2.484zm11.108-9.488.155.64c.043.183-.076.332-.263.333" /><path d="m68.112 82.936.5-2.48zm11.456-12.636.153.656zm-10.452 7.672.138-.664.537-2.515-.608 2.848-.067.33zm-2.393-8.104-.117.55-1.336 6.26 1.408-6.593.045-.216z" /><path d="m79.877 71.608-.155-.64-.23-1c-.304-1.18-1.196-1.863-3.134-1.863l-8.92-.006a.44.44 0 0 0 -.412.334l-.138.653-.2.987-2.744 12.853c-.04.184-.053.4-.03.5s.383.167.57.167h2.82c.188 0 .425-.034.528-.075s.254-.4.3-.594l1.07-5.294 1.145-5.364c.04-.183.225-.332.412-.333l8.873-.004c.187 0 .306-.15.263-.333zm11.423-5.793-.683.003h-2.84a.73.73 0 0 0 -.534.282l-6.28 9.2c-.106.155-.227.132-.27-.05l-.462-2.027a.45.45 0 0 0 -.417-.333h-4.037c-.188 0-.3.147-.248.328l1.8 6.338c.052.18.055.477.01.66l-.8 3.067a.25.25 0 0 0 .257.331h4c.188 0 .38-.15.426-.33l.8-3.067a2.04 2.04 0 0 1 .29-.604l10.206-13.533c.113-.15.052-.272-.136-.27l-1.07.007zm-32.076 7.937c-.024.2-.212.35-.4.35h-5.12c-.177 0-.267-.12-.24-.27l.004-.027.023-.087c.5-1.3 1.485-2.153 3.356-2.153 2.107 0 2.518 1.03 2.375 2.187zm-1.502-5.908c-6.57 0-8.127 3.988-9 8.013-.874 4.103-.798 7.94 6 7.94h1.078l.83-.003 4.326-.026a.44.44 0 0 0 .407-.335l.657-3.212c.038-.184-.085-.334-.273-.334h-6.112c-2.43 0-3.153-.646-2.887-2.545h9.77c.16-.003.305-.1.362-.252.01-.027.02-.056.024-.085 1.45-5.47 1.034-9.157-5.18-9.157zm-31.054 5.886-.092.327c0 .001-.738 2.616-.738 2.616l-.738 2.614a.48.48 0 0 1 -.434.328h-3.906c-2.962 0-3.683-2.317-2.962-5.734.72-3.495 2.135-5.668 5.05-5.888 3.984-.3 4.78 2.502 3.82 5.736zm2.678 5.685s1.84-4.47 2.26-7.053c.57-3.457-1.16-8.47-7.845-8.47-6.647 0-9.533 4.786-10.634 10-1.1 5.24.342 9.836 6.95 9.8l10.086-.037a.47.47 0 0 0 .427-.332l.85-3.238a.25.25 0 0 0 -.255-.332l-1.627-.01c-.16-.001-.25-.104-.232-.24.004-.025.01-.05.02-.076z" /><path d="m62.25 76.424c0 .124-.1.224-.224.224s-.224-.1-.224-.224.1-.224.224-.224.224.1.224.224z" /></g></g></svg> */}
                        </div>
                    </div>
                </section>

                <section className="certificate">
                    <h2 className="end sub-title">Certificate</h2>

                    <div className="certifiacte-image-container">

                        <div className="certificate-box">
                            <a href="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/8d141023-f1c7-42db-9892-9a562306f468.pdf" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/Udacity Nanodefree Graduation Certificate.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://confirm.udacity.com/XCGLWCUG" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/webDevProf.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://confirm.udacity.com/XCGLWCUG" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/pyCapeStone.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://www.coursera.org/account/accomplishments/certificate/WD4RXHDAC4VY" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/introToHtml.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://www.coursera.org/account/accomplishments/certificate/B2W9RSYN9G7G" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/databasePy.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://www-origin.coursera.org/account/accomplishments/certificate/TRZ65K2MKPGF" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/crashCourseOnPython.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://www-origin.coursera.org/account/accomplishments/certificate/KQXNVMY8FPQEhttps://confirm.udacity.com/XCGLWCUGhttps://www-origin.coursera.org/account/accomplishments/certificate/KQXNVMY8FPQE" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="images/about/pyDataStructure.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://www-origin.coursera.org/account/accomplishments/certificate/25629M7LKJJM" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="/images/about/Py4e.jpg" alt="certificate" />
                            </a>
                        </div>

                        <div className="certificate-box">
                            <a href="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/be2eedcf-31a4-4a30-927c-49c41a302c0c.pdf" rel="noopener noreferrer" target="_blank">
                                <img className="certificate-image" src="images/about/1milioncoder.jpg" alt="certificate" />
                            </a>
                        </div>

                    </div>

                </section>

                <section ref={forMore} className="about-me--more-container">
                    <small className="about-me--more">
                        For further information about Education, And Work Experiance etc Plaese check <a className="more-linked-in" href="https://www.linkedin.com/in/ahmedelbedfy/" target="_blank" rel='noopener noreferrer'>Linked in.</a>
                    </small>
                </section>
            </div>
        </div>
    )
}

export default AboutMe;
