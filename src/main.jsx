import React from 'react';
import ReactDom from 'react-dom/client';
//import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import router from '../Routes';
import './main.css'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider  router={router}/>
    </React.StrictMode>

)