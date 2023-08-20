import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestaurantMenu from "./src/RestaurantMenu";
import { lazy } from "react";
import { Suspense } from "react";



const Grocery = lazy(()=>  import("./src/Grocery"));

const AppLayout = () =>{
    
    return(
        <div className="app">
            <Header/>
            <Outlet/> {/* React-router-dom give us a component named Outlet. Whenever there will be a change in
            a path, Outlet will be filled with the children according to the path.
            
            AND, we will not see outlet in our html. because it will be filled with any of the path*/}

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path: "/grocery",
                element:<Suspense fallback = {<h1> Loading...</h1>}> <Grocery/></Suspense> 
            },
            {
                path:"/restaurant/:resId", // dynamic route
                element:<RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
        
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);

