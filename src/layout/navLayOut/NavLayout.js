import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    return (
        <div  >
            <Navbar  className="container"/>
            <Outlet/>
        </div>
    );
};

export default Main;