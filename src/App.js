import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';
import ShanmukaaPrides from './ShanmukaaPrides';
import KuberaaPrides from './KuberaaPrides';

function App() {
    return (
        <div className="App">
            {/* Header or Navigation component can be added here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects/shanmukaa-prides" element={<ShanmukaaPrides />} />
                <Route path="/projects/kuberaa-prides" element={<KuberaaPrides />} />
            </Routes>
            {/* Footer component can be added here */}
        </div>
    );
}

export default App;
