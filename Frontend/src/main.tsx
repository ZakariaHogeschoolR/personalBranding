import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import ActivityPage from './Components/Pages/ActivityPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portifolio from './Components/Portifolio/Portifolio';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import About from './Components/Pages/About';
import TimeLine from './Components/Pages/TimeLine';
import ActivityLayout from './Components/ActivityLayout/ActivityLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,          // global wrapper
    children: [
      {
        element: <Portifolio />,  // ← sidebar + portfolio navbar
        children: [
          { index: true, element: <Home /> },
          { path: '/about', element: <About /> },
          { path: '/TimeLine', element: <TimeLine /> },
          { path: '*', element: <NotFound /> },
        ],
      },
      {
        element: <ActivityLayout />, // ← different navbar for activity
        children: [
          { path: '/Activity/:id', element: <ActivityPage /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)