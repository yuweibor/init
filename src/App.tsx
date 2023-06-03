import * as React from 'react';
import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import HomeIndex from '@components/HomeIndex';
import ErrorPage from '@pages/ErrorPage';
import "./App.scss";

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomeIndex />,
            },
            {
                path: "redux",
                lazy: () => import("@/pages/Redux") as any
            },
            {
                path: 'context',
                lazy: () => import("@/pages/Context") as any
            },
            {
                path: 'reactredux',
                lazy: () => import("@/pages/ReactRedux") as any
            }
        ],
    },

]);