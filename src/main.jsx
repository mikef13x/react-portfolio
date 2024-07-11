import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutPage from './pages/aboutme'
import ContactPage from './pages/contact'
import HomePage from './pages/homepage'
import PortfolioPage from './pages/portfolio'
import ResumePage from './pages/resume'
import App from './app'


const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '/resume',
                element: <ResumePage/>
            },
            {
                path: '/portfolio',
                element: <PortfolioPage/>
            },
        ]
    }




])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
)