import React from 'react';
import { Link } from "react-router-dom";
const AboutNav = () => {
    return (
        <div>
            <ul>
                <Link><li>About me</li></Link>
                <Link><li>About Restult</li></Link>
                <Link><li>About Blog</li></Link>
            </ul>
        </div>
    );
};

export default AboutNav;