import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists or remove if not needed
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
