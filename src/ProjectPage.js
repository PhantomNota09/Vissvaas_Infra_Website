import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import shanmukaProjectLocation from './images/shanmuka prides last page.jpg';
import shanmukaProjectfirst from './images/shanmuka prides first page.jpg';
import shanmukaProjectLayout from './images/shanmuka prides middle page.jpg';

import logo from './images/company-logo.png';
import brochurePDF from './shanmuka prides.pdf';

const project = {
    name: "Shanmukaa Prides",
    location: "Bibinagar",
    details: [
        "HMDA Approved layout",
        "100% Vaastu followed",
        "Back top roads with footpaths",
        "Storm water drains",
        "Community Gardens",
        "Vast children play areas",
        "Designer landscaping",
        "Water harvesting",
        "Underground Drainage",
        "Underground Electricity",
        "Water supply through water tank",
        "Avenue Plantation",
        "Security"
    ],
    locationHighlights: [
        "Hyd-Warangal Express highway",
        "Near Bibinagar Railway Junction",
        "Near MMTS Railway Station",
        "AIIMS in 200 acres",
        "CCMB",
        "IT Growth Corridor",
        "- Infosys",
        "- Raheja Mind Space",
        "Singapore Township",
        "Educational Hub - Engineering & Pharmacy Colleges",
        "Near Telangana's Biggest Temple Yadadri"
    ],
    images: {
        first: shanmukaProjectfirst,
        location: shanmukaProjectLocation,
        layout: shanmukaProjectLayout
    }
};

const ProjectPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const dotsRef = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 10000); // seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (slidesRef.current) {
            slidesRef.current.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        if (dotsRef.current) {
            dotsRef.current.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    return (
        <div className="project-page">
            <header>
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Company Logo" className="company-logo" />
                </Link>
                <div className="nav-container">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="dropdown">
                                <Link to="/projects" className="dropbtn">Projects</Link>
                                <div className="dropdown-content">
                                    <Link to="/projects/shanmukaa-prides">Shanmukaa Prides</Link>
                                    {/* Add more project links here */}
                                </div>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section className="project-intro">
                    <h1>{project.name}</h1>
                    <div className="carousel-container">
                        <div className="carousel-wrapper">
                            <div className="carousel-slide" ref={slidesRef}>
                                <img src={project.images.first} alt={`${project.name} Main View`} className="carousel-image" />
                                <img src={project.images.layout} alt="Project Layout" className="carousel-image" />
                                <img src={project.images.location} alt="Project Location" className="carousel-image" />
                            </div>
                        </div>
                        <div className="carousel-controls">
                            <button className="carousel-prev" onClick={handlePrev}>&#10094;</button>
                            <button className="carousel-next" onClick={handleNext}>&#10095;</button>
                        </div>
                        <div className="carousel-dots">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="dot"
                                    ref={(el) => (dotsRef.current[index] = el)}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="project-info">
                    <div className="info-box details-box">
                        <h2>Project Details</h2>
                        <ul>
                            {project.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="info-box highlights-box">
                        <h2>Location Highlights</h2>
                        <ul>
                            {project.locationHighlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="brochure-section">
                    <a href={brochurePDF} download className="brochure-link">Download Brochure</a>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Vissvaas Infraa PVT LTD. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProjectPage;