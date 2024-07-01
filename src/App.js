import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage'; // Import the ContactPage component

// Import other components/pages like Projects, Contact, etc.

function App() {
    return (
        <Router>
            <div className="App">
                {/* Header or Navigation component can be added here */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/contact" element={<ContactPage />} /> {/* Add the ContactPage route */}
                    {/* Add routes for other pages here */}
                    {/* Example: <Route path="/projects" element={<Projects />} /> */}
                    {/* Example: <Route path="/contact" element={<Contact />} /> */}
                </Routes>
                {/* Footer component can be added here */}
            </div>
        </Router>
    );
}

export default App;
