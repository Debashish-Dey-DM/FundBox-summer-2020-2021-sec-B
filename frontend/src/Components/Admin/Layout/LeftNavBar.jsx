import React from 'react'

export default function LeftNavBar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <a className="nav-link" href="/admin/dashboard">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                            Dashboard
                        </a>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className="nav-link" href="/admin/category">
                            <div className="sb-nav-link-icon"><i className="far fa-handshake" /></div>
                            Category
                        </a>
                        
                        <a className="nav-link" href="/admin/createAdmin">
                            <div className="sb-nav-link-icon"><i className="fas fa-user-ninja" /></div>
                            Create Admin
                        </a>
                        <a className="nav-link" href="/admin/manageAdmin">
                            <div className="sb-nav-link-icon"><i className="fas fa-user-ninja" /></div>
                            Manage Admin
                        </a>

                        <div className="sb-sidenav-menu-heading">Organization</div>
                        <a className="nav-link" href="/admin/orgCreate">
                            <div className="sb-nav-link-icon"><i className="fas fa-hands" /></div>
                            Create Organisation
                        </a>
                        <a className="nav-link" href="/admin/pendingOrg">
                            <div className="sb-nav-link-icon"><i className="fas fa-hands" /></div>
                            Pending Organisation
                        </a>
                        <a className="nav-link" href="/admin/orgManage">
                            <div className="sb-nav-link-icon"><i className="fas fa-hands" /></div>
                            Manage Organisation
                        </a>

                        <div className="sb-sidenav-menu-heading">Events</div>
                        <a className="nav-link" href="/admin/createAdminEvent">
                            <div className="sb-nav-link-icon"><i class="fas fa-calendar-week"/></div>
                            Create Admin Event
                        </a>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="fas fa-calendar-week"/></div>
                            Create organisation Event
                        </a>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="fas fa-calendar-week"/></div>
                            Create Volunteer Event
                        </a>

                        <div className="sb-sidenav-menu-heading">Manage Events</div>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="fas fa-calendar-week"/></div>
                            Admin
                        </a>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="fas fa-calendar-week"/></div>
                            Pending
                        </a>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="fas fa-calendar-week"/></div>
                            Accepted
                        </a>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="fas fa-list"/></div>
                            Volunteer List
                        </a>
                        <a className="nav-link" href="/admin/transitionList">
                            <div className="sb-nav-link-icon"><i class="fas fa-dollar-sign"/></div>
                            Transition List
                        </a>

                        <div className="sb-sidenav-menu-heading">Sponsor</div>
                        <a className="nav-link" href="/admin/sponsor">
                            <div className="sb-nav-link-icon"><i class="fas fa-hand-holding-usd"/></div>
                            Pending Sponsor
                        </a>
                        <a className="nav-link" href="/admin/sponsorManage">
                            <div className="sb-nav-link-icon"><i class="fas fa-hand-holding-usd"/></div>
                            Manage Sponsor
                        </a>

                        <div className="sb-sidenav-menu-heading">Reports</div>
                        <a className="nav-link" href="/admin/reports">
                            <div className="sb-nav-link-icon"><i class="far fa-flag"/></div>
                            Manage Reports
                        </a>

                        <div className="sb-sidenav-menu-heading">Account</div>
                        <a className="nav-link" href="#">
                            <div className="sb-nav-link-icon"><i class="far fa-flag"/></div>
                            Manage Account
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
