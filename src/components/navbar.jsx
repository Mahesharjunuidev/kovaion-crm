import { useState } from "react";
import Menu from "./menu";
import { sitelogo } from "../data/content";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    
    
<nav className="navbar fixed-top mobile-menu bg-white">
  <div className="container-fluid">
<img
    src={sitelogo} // Replace with your actual logo path
    alt="Logo"
    className="img-fluid ms-3"
  />      <button className="navbar-toggler mobile" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <Menu/>
       <div className="input-group ms-3" style={{ maxWidth: "100%" }}>
            <input type="text" className="form-control search" placeholder="Search..." />
            <span className="input-group-text bg-white">
              <i className="bi bi-search text-muted"></i>
            </span>
          </div>
          </div>
    </div>
  </div>
</nav>

     <div className={`sidebar position-relative ${collapsed ? "collapsed" : "expanded"}`}>
  <button
    className="toggle-btn"
    onClick={() => setCollapsed(!collapsed)}
    title={collapsed ? "Expand" : "Collapse"}>
    <i className="bi bi-list"></i>
  </button>

  {/* Logo Section */}
  <div className="logo-container text-center my-3">
  <Link to='/'><img
    src={sitelogo} // Replace with your actual logo path
    alt="Logo"
    className="img-fluid"
    style={{
      transition: "all 0.3s ease",
      width: collapsed ? "120px" : "80px", // expands when collapsed, shrinks when expanded
      height: "auto"
    }}
  /></Link>
</div>


 <Menu collapsed={collapsed} />
</div>

    </>
  );
};

export default Sidebar;
