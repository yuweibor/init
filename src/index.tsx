import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './App';

ReactDom.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
