import React from "react";
import { Nav } from "react-bootstrap";

const Footer = (): JSX.Element => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row align-items-center mt-3" style={{ padding: "40px 0px"}}>
        <div className="col-md-6 mt-md-0">
          <h5 className="text-uppercase">ShibArmy NFT Marketplace</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-6 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/collections">Collections</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:{" "}
      <a href="/">ShibArmy</a>
    </div>
  </footer>
);

export default Footer;
