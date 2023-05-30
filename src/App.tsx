import * as React from 'react';
import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import HomeIndex from './components/HomeIndex';
import "./App.scss";

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <HomeIndex />,
            },
            {
                path: "list",
                lazy: () => import("@/pages/List") as any
            },
            {
                path: 'detail',
                lazy: () => import("@pages/Detail") as any
            }
        ],
    },

]);