import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}