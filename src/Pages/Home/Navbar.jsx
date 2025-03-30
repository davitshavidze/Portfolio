import React from "react";
import { useState, useEffect } from "react"
import {Link} from "react-scroll"

function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toogleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500){
                closeMenu;
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu
        }
    }, []);

    return(
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <h1 className="main--heading">David Shavidze</h1>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""} `} onClick={toogleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="navbar--content"
                        >Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="myPortfolio"
                        className="navbar--content"
                        >Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="navbar--content"
                        >About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Testimonials"
                        className="navbar--content"
                        >Feedbacks
                        </Link>
                    </li>
                </ul>
            </div>
            <Link 
            onClick={closeMenu} activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary"
            >Contact Me
            </Link>
        </nav>
    )
}

export default Navbar