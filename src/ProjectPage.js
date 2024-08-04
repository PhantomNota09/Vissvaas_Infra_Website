import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import shanmukaProjectfirst from './images/shanmuka-logo.png';
import kuberaProjectImage from './images/Kuberaa-logo.png';

import logo from './images/company-logo.png';

const projects = [
    {
        name: "Shanmukaa Prides",
        location: "Bibinagar",
        briefInfo: "HMDA Approved layout with 100% Vaastu followed. Featuring black top roads, storm water drains, and community gardens. The project also includes community gardens and recreational areas for a healthy lifestyle.",
        image: shanmukaProjectfirst,
    },
    {
        name: "Kuberaa Prides",
        location: "Near M Turkapally",
        briefInfo: "DTCP Approved layout with grand entrance arch, black top roads, and avenue plantation. Proximity to Yadadri Temple. The project features spacious plots with lush greenery and modern amenities.",
        image: kuberaProjectImage,
    }
];

const ProjectPage = () => {
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
                {projects.map((project, index) => (
                    <section className={`project-section ${index % 2 === 0 ? 'light-grey' : 'dark-grey'}`} key={index}>
                        <div className="project-content">
                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.briefInfo}</p>
                            </div>
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                        </div>
                    </section>
                ))}
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
