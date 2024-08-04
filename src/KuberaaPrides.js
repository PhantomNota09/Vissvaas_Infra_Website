import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './KuberaaPrides.css';
import KuberaaProjectLocation from './images/Kuberaa prides third page.jpg';
import KuberaaProjectfirst from './images/Kuberaa prides first page.jpg';
import KuberaaProjectLayout from './images/Kuberaa prides second page.jpg';

import logo from './images/company-logo.png';
import brochurePDF from './Kuberaa prides.pdf';

const project = {
    name: "Kuberaa Prides",
    location: "Near Yadadri, Telangana",
    details: [
        "DTCP Approved layout",
        "100% Vaastu Compliance",
        "Gated Community with Grand Entrance Arch",
        "Back Top Roads with Footpaths",
        "Avenue Plantation",
        "Children's Park",
        "Swimming Pool",
        "Open Air Gym",
        "Water Harvesting",
        "Goshala",
        "Community Gardens",
        "Designer Landscaping"
    ],
    locationHighlights: [
        "Near to Telangana's Biggest Temple Yadadri",
        "Close to proposed YTDA Ring Road",
        "Close to Kaleshwaram Canal",
        "Nearby TSIIC Agricultural Godown",
        "Nearby Pharmacy Industry",
        "Nearby Schools, Colleges, Resorts & Function Halls",
        "Baswapuram Reservoir",
        "Bhongiri Fort",
        "Keesaragutta"
    ],
    images: {
        first: KuberaaProjectfirst,
        location: KuberaaProjectLocation,
        layout: KuberaaProjectLayout
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
                                    <Link to="/projects/kuberaa-prides">Kuberaa Prides</Link>

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
                <section className="project-info-1">
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
                <div className="contact-info">
                    <p>Address: Vaishnavi Complex, Street No. 06, Habsiguda Main Road, Habsiguda, Hyderabad, Telangana, INDIA.</p>
                    <p>Phone: <a href="tel:+918885555555">888-555-5555</a></p>
                    <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vissvaas122@gmail.com" target="_blank" rel="noreferrer">vissvaas122@gmail.com</a></p>
                </div>
            </footer>
        </div>
    );
};

export default ProjectPage;