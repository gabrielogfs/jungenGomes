import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'

import SkinCatalog from './SkinCatalog.jsx'
import './index.css'
import SkinDetails from './SkinDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SkinCatalog />
  },
  {
    path: "/skin/:skinID",
    element: (
        <>
        <SkinDetails />
        <Link to={"/"}>Back to Home</Link>
        </>
        )
    },
        ]);

        createRoot(document.getElementById('root')).render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>,
        )
