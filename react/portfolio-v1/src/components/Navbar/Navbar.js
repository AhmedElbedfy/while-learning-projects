import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { TweenLite, Power3 } from 'gsap';


function Navbar() {
    const [click, setClick] = useState(false);

    const logo = useRef(null);
    const link = useRef([]);

    useEffect(() => {
        TweenLite.from(logo.current, {
            opacity: 0,
            duration: 2,
            y: -60,
            x: -60,
            ease: Power3
        })
        TweenLite.staggerFrom(link.current, 1, {
            opacity: 0,
            duration: 2,
            x: 60,
            ease: Power3,
            stagger: "0.5"
        })
    }, [])

    function handleClick() { setClick(!click); }
    function closeMobileMenu() {
        setClick(false);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <div className="logo-container">
                        <Link ref={logo} to="/" className="navbar-logo" onClick={closeMobileMenu} title="Home">

                            <svg width="50" height="50" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.9" d="M77 38.5C77 59.763 59.763 77 38.5 77C17.237 77 0 59.763 0 38.5C0 17.237 17.237 0 38.5 0C59.763 0 77 17.237 77 38.5Z" fill="url(#paint0_linear)" />
                                <path d="M49.5 61C37.5 65.5 34.5 68 19 61L9 55.5055L16.4725 16.4945L39.2615 7L62 15L67.5 55.5055L58.5 60.5L45.5 43.5L27 19.5L49.5 61Z" fill="#0B0808" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.2463 6.46466L62.4542 14.6298L68.0414 55.7769L58.365 61.1467L45.1039 43.8053L30.414 24.7482L50.2132 61.2666L49.6755 61.4682C48.5701 61.8827 47.5372 62.2822 46.5604 62.6599C42.284 64.3137 39.0844 65.5511 35.5996 65.8111C31.2843 66.1332 26.5653 64.9653 18.7941 61.4557L18.7763 61.4477L8.44043 55.7686L16.0319 16.1364L39.2463 6.46466ZM39.2765 7.53538L16.9129 16.8527L9.5594 55.2424L19.2235 60.5524C26.9415 64.0365 31.4686 65.1166 35.5252 64.8139C38.849 64.5659 41.8796 63.3951 46.1422 61.7483C46.9732 61.4273 47.8511 61.0881 48.787 60.7342L26.5604 19.7383L27.3959 19.1948L45.8959 43.1948L45.8971 43.1963L58.6348 59.8533L66.9585 55.2342L61.5456 15.3702L39.2765 7.53538Z" fill="black" />
                                <path d="M38.5032 15.432C42.6419 15.432 46.2472 16.2427 49.3192 17.864C52.3912 19.4853 54.7806 21.8747 56.4872 25.032C58.1939 28.1893 59.0472 32.008 59.0472 36.488V61H48.6792V50.248H28.1992V61H17.9592V36.488C17.9592 32.008 18.8126 28.1893 20.5192 25.032C22.2259 21.8747 24.6152 19.4853 27.6872 17.864C30.7592 16.2427 34.3646 15.432 38.5032 15.432ZM48.6792 41.928V35.528C48.6792 31.816 47.7619 29.0213 45.9272 27.144C44.0926 25.224 41.5966 24.264 38.4392 24.264C35.2392 24.264 32.7219 25.224 30.8872 27.144C29.0952 29.0213 28.1992 31.816 28.1992 35.528V41.928H48.6792Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="-7" y1="4.5" x2="104.5" y2="83.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25205D" />
                                        <stop offset="0.861951" stop-color="#747479" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h1 className="navbar-logo-name">Ahmed Khaled</h1>

                        </Link>
                    </div>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <div className={click ? 'links-container active' : 'links-container'}>
                        <ul className='nav-menu'>
                            <li ref={element => { link.current[0] = element; }} className="nav-item">
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                    Home
                            </Link>
                            </li>
                            <li ref={element => { link.current[1] = element; }} className="nav-item">
                                <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                                    About
                            </Link>
                            </li>
                            <li ref={element => { link.current[2] = element; }} className="nav-item">
                                <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                                    Skills
                            </Link>
                            </li>
                            <li ref={element => { link.current[3] = element; }} className="nav-item">
                                <Link to="/contact-me" className='nav-links' onClick={closeMobileMenu}>
                                    Contact
                            </Link>
                            </li>

                        </ul>
                        <section class='social-media'>

                            <a
                                rel='noopener noreferrer'
                                class='social-icon-link facebook'
                                href='https://www.facebook.com/AhmedBedfy/'
                                target='_blank'
                                aria-label='Facebook'
                                title="facebook"
                            >
                                <i class='fab fa-facebook-f' />
                            </a>

                            <a
                                rel='noopener noreferrer'
                                class='social-icon-link github'
                                href='https://github.com/AhmedElbedfy'
                                target='_blank'
                                aria-label='github'
                                title="github"
                            >
                                <i class="fab fa-github"></i>
                            </a>

                            <a
                                rel='noopener noreferrer'
                                class='social-icon-link linkedin'
                                href='https://www.linkedin.com/in/ahmedelbedfy/'
                                target='_blank'
                                aria-label='LinkedIn'
                                title='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </a>
                        </section>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
