import React from 'react'

export default function LeftNavBar() {
    return (
        <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/sp/dashboard">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                            Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link" href="/sp/allAdvertiser">
                            <div className="sb-nav-link-icon"><i className="far fa-handshake" /></div>
                            All Advertise
                            </a>
                            <a className="nav-link" href="/sp/addAdvertise">
                            <div className="sb-nav-link-icon"><i className="fas fa-user-ninja" /></div>
                            Add Advertise
                            </a>
                            <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-hands" /></div>
                            All Organization
                            </a>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="#!">
                            <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                            Charts
                            </a>
                            <a className="nav-link" href="#!">
                            <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                            Tables
                            </a>
                        </div>
                        </div>
                        <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Admin
                        </div>
                    </nav>
                    </div>
    )
}
