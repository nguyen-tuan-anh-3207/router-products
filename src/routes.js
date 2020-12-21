import Home from "./components/Home";
import About from "./components/About";
import Links from "./components/Links";
import NotFound from './components/NotFound';
import React from "react";
import Products from "./components/Products";
import Login from "./components/Login";

const routes = [
    {
        path : '/',
        exact : true,
        main : ()=><Home/>
    },
    {
        path : '/about',
        exact : false,
        main : ()=><About/>
    },
    {
        path : '/link',
        exact : false,
        main : ()=><Links/>
    },
    {
        path : '/products',
        exact : false,
        main : ({match,location})=><Products location ={location} match={match}/>
    },
    {
        path : '/login',
        exact : false,
        main : ({location})=><Login location={location}/>
    },
    {
        path : '',
        exact : false,
        main : ()=><NotFound/>
    },

];

export default routes;