import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../dummyLogo.png';
import avatar from '../../avatar.png';
import 'boxicons';

 const AdminHome = () => {
    return (
        <>
            <div className="header-navbar-shadow"></div>
            <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top">
                <div className="navbar-wrapper">
                    <div className="navbar-container content">
                        <div className="navbar-collapse" id="navbar-mobile">
                            <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ficon bx bx-menu"></i></a></li>
                                </ul>
                                <ul className="nav navbar-nav bookmark-icons">
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Email">
                                            <i className="ficon bx bx-envelope"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Chat">
                                            <i className="ficon bx bx-chat"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Todo">
                                            <i className="ficon bx bx-check-circle"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <a className="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="Calendar">
                                            <i className="ficon bx bx-calendar-alt"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="nav navbar-nav float-right">
                                <li className="nav-item d-none d-lg-block">
                                    <a className="nav-link nav-link-expand">
                                        <i className="ficon bx bx-fullscreen nav-item-home-floating" data-toggle="tooltip" data-placement="top" title="Fullscreen"></i>
                                    </a>
                                </li>
                                <li className="dropdown dropdown-user nav-item">
                                    <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                        <div className="user-nav d-sm-flex d-none">
                                            <span className="user-name">full_name</span>
                                            <span className="user-status text-muted">user_email</span>
                                        </div>
                                        <span>
                                            <img className="round" src={avatar} alt="avatar" height="40" width="40"/>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right pb-0">
                                        <a className="dropdown-item" href="#">
                                            <i className="bx bx-user mr-50"></i> Edit Profile</a>
                                        <div className="dropdown-divider mb-0"></div>
                                        <a className="dropdown-item" href="/logout">
                                            <i className="bx bx-power-off mr-50"></i> Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
                <div className="navbar-header mb-3">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mr-auto">
                            <a className="navbar-brand" href="/">
                                <img src={logo} width="80%" height="100px"  />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="shadow-bottom"></div>
                <div className="main-menu-content" style={{ "paddingBottom" :"100px"}}>
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="lines">
                        <h4 className="nav-item" style={{ "padding" :"10px"}}>
                            <span className="menu-title">Admin Dashboard</span>
                        </h4>
                        <h6>Admin Manage</h6>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/createAdmin'} className="btn btn-primary btn-sm foat-end"> Create Admin </Link>
                        </li>

                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/manageAdmin'} className="btn btn-primary btn-sm foat-end"> Manage Admin </Link>
                        </li>

                        <br/>
                        <h6 className=" navigation-header"><span>Organisation</span></h6>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/orgCreate'} className="btn btn-primary btn-sm foat-end"> Create Organisation </Link>
                        </li>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/pendingOrg'} className="btn btn-primary btn-sm foat-end"> Pending Organisation </Link>
                        </li>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/orgManage'} className="btn btn-primary btn-sm foat-end"> Manage Organisation </Link>
                        </li>
                        <br/>
                        <h6 className=" navigation-header"><span>Category</span></h6>
                        <li className="nav-item">
                            <Link to={'/admin/category'} className="btn btn-primary btn-sm foat-end"> Category Manage</Link>
                        </li>

                        <br />
                        <h6>Event</h6>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/createAdminEvent'} className="btn btn-primary btn-sm foat-end"> Create Admin Event </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-hover" href="#">
                                <i className="bx bxs-navigation mr-50"></i>
                                <span className="menu-title" data-i18n="Category Manager">Create organisation Event</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-hover" href="#">
                                <i className="bx bxs-navigation mr-50"></i>
                                <span className="menu-title" data-i18n="City Manager">Create Volunteer Event</span>
                            </a>
                        </li>
                        
                        <li className="nav-item has-sub">
                            <a href="#">
                                <i className="bx bxs-package mr-50"></i>
                                <span className="menu-title" data-i18n="Area Coverage">Manage Events</span>
                            </a>
                            <ul className="menu-content">
                                <li className="nav-item">
                                    <a className="nav-hover" href="#">
                                        <i className="bx bxs-navigation mr-50"></i>
                                        <span className="menu-title" data-i18n="Category Manager">Admin</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-hover" href="#">
                                        <i className="bx bxs-navigation mr-50"></i>
                                        <span className="menu-title" data-i18n="Category Manager">Pending</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-hover" href="#">
                                        <i className="bx bxs-navigation mr-50"></i>
                                        <span className="menu-title" data-i18n="Category Manager">Accepted</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                            
                        {/* <li className="nav-item">
                            <a className="nav-hover" href="#">
                                <i className="bx bx-planet mr-50"></i>
                                <span className="menu-title" data-i18n="City Manager">Volunteer List</span>
                            </a>
                        </li> */}
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/transitionList'} className="btn btn-primary btn-sm foat-end"> Transition List </Link>
                        </li>   
                        
                        <br />
                        <h6>Manage Sponsor</h6>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/sponsor'} className="btn btn-primary btn-sm foat-end"> Pending Sponsor </Link>
                        </li>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/sponsorManage'} className="btn btn-primary btn-sm foat-end"> Manage Sponsor </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-hover" href="#">
                                <i className="bx bx-planet mr-50"></i>
                                <span className="menu-title" data-i18n="City Manager">Sponsor Banner</span>
                            </a>
                        </li> */}

                        <br />
                        <h6>Report</h6>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <Link to={'/admin/reports'} className="btn btn-primary btn-sm foat-end"> Manage Reports </Link>
                        </li>

                        <br />
                        <h6>Account</h6>
                        <li className="nav-item" style={{ "padding" :"5px"}}>
                            <a className="nav-hover" href="#">
                                <i className="bx bx-planet mr-50"></i>
                                <span className="menu-title" data-i18n="City Manager">Manage Account</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default AdminHome;