import "./layout.scss";
import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar/nav";

function Layout({ children }) {
  return (
    <section className="layout">
      <Navbar />
      <main className="layout__wrapper">{children}</main>
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
