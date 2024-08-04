import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './header.css';
import logo from './images/company-logo.png';
import director from './images/director.png';
import managingDirector from './images/managingDirector.png';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const images = [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
         'https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="home-page">
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
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome to Vissvaas Infraa</h1>
                        <p>Building dreams with precision and excellence.</p>
                    </div>
                    <div className="background-layer previous" style={{ backgroundImage: `url(${images[prevIndex]})` }}></div>
                    <div className="background-layer current" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                </section>
                <section className="company-info">
                    <h1>About Vissvaas Infraa</h1>
                    <p>Vissvaas Infraa is a significant player in Hyderabad's real estate sector, known for its commitment to excellence and precision. We focus on creating value-driven residential spaces, helping families realize their dream of owning a home.</p>

                    <div className="vision-mission">
                        <div>
                            <h2>Vision</h2>
                            <p>To become a trusted name in the real estate industry by consistently delivering superior quality projects that exceed customer expectations.</p>
                        </div>
                        <div>
                            <h2>Mission</h2>
                            <p>To build homes with meticulous attention to detail, ensuring each project offers exceptional value and lasting satisfaction to customers.</p>
                        </div>
                    </div>

                    <p><strong>Office Address:</strong> Vaishnavi Complex, Street No. 06, Habsiguda Main Road, Habsiguda, Hyderabad, Telangana, INDIA.</p>
                </section>


                <section className="directors-info">
                    <div className="director">
                        <img src={managingDirector} alt="Managing Director" />
                        <h2>Managing Director Name</h2>
                        <p>Managing Director's brief biography or role description.</p>
                    </div>
                    <div className="director">
                        <img src={director} alt="Director" />
                        <h2>Director Name</h2>
                        <p>Director's brief biography or role description.</p>
                    </div>
                </section>
                <section className="company-stats">
                    <div className="stat-item">
                        <h2>Number of Customers</h2>
                        <p>1000+</p>
                    </div>
                    <div className="stat-item">
                        <h2>Number of Projects</h2>
                        <p>50+</p>
                    </div>
                    <div className="stat-item">
                        <h2>Achievements</h2>
                        <p>Best Real Estate Company 2022</p>
                    </div>
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

export default HomePage;
