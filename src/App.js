import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';
import ShanmukaaPrides from './ShanmukaaPrides';
import KuberaaPrides from './KuberaaPrides';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Header or Navigation component */}
                <header>
                    <h1>My Website</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/projects/shanmukaa-prides" element={<ShanmukaaPrides />} />
                        <Route path="/projects/kuberaa-prides" element={<KuberaaPrides />} />
                    </Routes>
                </main>
                {/* Footer component */}
                <footer>
                    <p>&copy; 2024 My Website</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
