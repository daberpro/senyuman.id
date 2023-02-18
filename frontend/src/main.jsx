import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }  from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { NotFoundPage } from './component/not-found';
import { UIKit } from './route/UIKit';

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/ui-kit",
    element: <UIKit/>
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider start="true" router={routing} />
  </React.StrictMode>
)
