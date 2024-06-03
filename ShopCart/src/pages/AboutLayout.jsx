import React from 'react';
import { Outlet } from "react-router-dom";
import AboutNav from './AboutNav';
const AboutLayout = () => {
    return (
        <div>
            <Outlet/>
            <AboutNav/>
        </div>
    );
};

export default AboutLayout;