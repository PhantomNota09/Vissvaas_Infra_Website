import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/company-logo.png';
import './ContactPage.css';
import './header.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
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
                <div className="contact-form-container">
                    <h2>Contact Us</h2>
                    <form action="#" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" maxLength="12" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
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

export default ContactPage;
