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
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
        'https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg',
        'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

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
                    <p>Vissvaas Infraa is a leading player in Hyderabad's real estate industry. We help many people to make their dreams of owning a home come true. We build each home with painstaking attention to quality, useful detailing, and ensure value for money. We desire to earn people's trust and confidence whenever we launch our new products and services.</p>
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
            </footer>
        </div>
    );
};

export default HomePage;
