import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Vos styles personnalisés
import './styles/styles.css';
import './styles/services.css';
import './styles/bookingModal.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
