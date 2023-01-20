import React from 'react';
// import { Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/Error';

// const Routes = () => {
//     return (
//         <Switch>
//             <Route exact path="/">
//                 <Home />
//             </Route>
//             <Route exact path="/login">
//                 <Login />
//             </Route>
//             <Route exact path="/signup">
//                 <Signup />
//             </Route>
//         </Switch>
//     )
// }

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,        
    }
]);

export default Routes;