import React,{lazy,Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact'; 
import Error from './components/Error';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import ResturantMenu from './components/RestaurantMenu';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Demo from './components/Demo';

const Grocery = lazy(() => import("./components/Grocery"));
const Delivery = lazy(() => import("./components/Delivery"));

const AppLayout = () => {
    const [userName,setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Jagadeesh"
        };
        setUserName(data.name);
    },[])

    return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
        <div className='app'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/delivery",
                element: <Suspense fallback={<h1>Still Loading…</h1>}><Delivery /></Suspense>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Still Loading…</h1>}><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <ResturantMenu />
            },
            {
                path:"/cart",
                element: <Cart />
            },
            {
                path:"/demo",
                element: <Demo />
            }
        ],
        errorElement: <Error />
    },
   
])

//const header = React.createElement("h3",{id:"header"},"Jagadesh");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)
   