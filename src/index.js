import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/reset.css'
import './Style/General.css'
import './Style/About.css'
import './Style/Landing.css'
import './Style/Portfolio.css'
import './Style/Animation.css'
import './Style/Footer.css'
import './Animations'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);