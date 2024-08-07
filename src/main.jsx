import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './App'; // Import your main App component  
import './index.css'; // Import your CSS styles  

// Create a root element for React to render to  
const root = ReactDOM.createRoot(document.getElementById('root'));  

// Render the App component into the root element  
root.render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>  
);