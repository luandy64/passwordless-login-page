import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import Routes from './Routes';
import GlobalStyle from './reset.css.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <Router>
	// 	<App />
	// </Router>
    <div>
        <RouterProvider router={Routes} />
    </div>
)
