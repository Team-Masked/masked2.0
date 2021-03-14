import React from "react";
import logo from "../images/masked-logo.svg";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="side main-sidebar sidebar-dark-primary elevation-4">
      <div className="sidebar__logo">
        <a>
          <img className="sidebar__link" src={logo} alt="Logo" />
        </a>
      </div>
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input
            className="app__search"
            type="text"
            name="q"
            className="form-control"
            placeholder="Search..."
          />
          <span className="sidebar__btn input-group-btn">
            <button
              type="submit"
              name="search"
              id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview menu-open">
              <a href="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Home
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul> */}
            </li>
            {/* <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Widgets
                </p>
              </a>
            </li> */}
            <li className="nav-item has-treeview">
              <a href="/upload" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Reporter's Guidelines
                  <i className="fas fa-angle-left right" />
                  {/* <span className="badge badge-info right">6</span> */}
                </p>
              </a>
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compliance</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation + Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Boxed</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-footer.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item has-treeview">
              <a href="/compliance#/holdSummary" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Contact Us
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>ChartJS</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Flot</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/inline.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inline</p>
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item has-treeview">
              <a href="sipStp#/portfolioPerformance" className="nav-link">
                <i className="nav-icon fas fa-tree" />
                <p>
                  Awareness
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/UI/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/icons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Icons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/buttons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Buttons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/sliders.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Sliders</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/modals.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Modals &amp; Alerts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/navbar.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Navbar &amp; Tabs</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/timeline.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Timeline</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/UI/ribbons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Ribbons</p>
                  </a>
                </li>
              </ul> */}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
