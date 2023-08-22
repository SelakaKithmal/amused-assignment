import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Header = React.memo(() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <h1>Amused Assignment</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <HeaderNav />
        </nav>
    );
})

export default Header;