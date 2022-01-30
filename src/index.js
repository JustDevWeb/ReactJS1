import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routers from "./pages/Routers";






ReactDOM.render(
    <React.StrictMode>
        <Routers/>
        {/*<App />*/}
    </React.StrictMode>,
    document.getElementById('root')
);


