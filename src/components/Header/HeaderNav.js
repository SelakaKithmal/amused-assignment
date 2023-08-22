
import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = React.memo(() => {
    return (
        <div className="collapse navbar-collapse" id="navbarContent" >
            <ul className="navbar-nav ml-auto">
                <li data-testid="favourites-link">
                    <Link to="/favourites"><h5>Favourites <i className="bi bi-heart-fill" data-testid="favourite-icon" /> </h5></Link>
                </li>
            </ul>
        </div>
    );
})

export default HeaderNav;