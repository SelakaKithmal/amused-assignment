import React from "react";
import { StyledFooter } from "./StyledFooter";
import { scrollToTop } from '../../utils/scroll';
import { Button } from "react-bootstrap";

const Footer = React.memo(() => {
    return (
        <div>
            <footer data-testid="footer">
                <Button onClick={scrollToTop} className="btn btn-sm"><i className="bi bi-arrow-up-short">Scroll Top</i></Button>
            </footer>
        </div>
    );
})

export default Footer;