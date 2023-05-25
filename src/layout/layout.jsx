import "./layout.scss";
import React from "react";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <>
      <section className="layout">
        <main>{children}</main>
      </section>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
