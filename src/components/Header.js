import React from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0   ">
      <div className="navbar-nav">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
      </div>
    </nav>
  );
};

export default Header;
