import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Signup from './SignUp';
import HomePage from './Home';
import Product from './Product';
import OrderConfirmed from './Placeorder';

function AppOut()
{
    const route=createBrowserRouter([
        {
            path:'/',
            element:<App/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/home',
            element:<HomePage/>
        },
        {
            path:"/product",
            element:<Product/>
        },
        {
            path:'/PlaceOrder',
            element:<OrderConfirmed/>
        }

    ])
    return(
        <div><RouterProvider router={route}></RouterProvider></div>
    )
}
export default AppOut;