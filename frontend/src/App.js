import logo from './dummyLogo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrgHome from './Components/Org/OrgHome';
import CreateEvent from './Components/Org/CreateEvent';
import CreateVolEvent from './Components/Org/CreateVolEvent';
import EventList from './Components/Org/EventList';
import EditEvent from './Components/Org/EditEvent';
import DeleteEvent from './Components/Org/DeleteEvent';
import Category from './Components/Admin/Category';
import DeleteCategory from './Components/Admin/DeleteCategory';

import SpTest from './Components/Sponsor/SpTest';
import SponsorHome from './Components/Sponsor/SponsorHome';
import ListOfAdvertise from './Components/Sponsor/ListOfAdvertise';
import AddAdvertise from './Components/Sponsor/AddAdvertise';
import OngoingEvents from './Components/Sponsor/OngoingEvents';
import SpTransactionList from './Components/Sponsor/SpTransactionList';

import EditCategory from './Components/Admin/EditCategory';
import AdminHome from './Components/Admin/AdminHome';
import CreateAdmin from './Components/Admin/CreateAdmin';
import AdminManage from './Components/Admin/AdminManage';
import AdminDelete from './Components/Admin/AdminDelete';
import AdminEdit from './Components/Admin/AdminEdit';
import PendingSponsorList from './Components/Admin/Sponsor/PendingSponsorList';
import SponsorAccept from './Components/Admin/Sponsor/SponsorAccept';
import SponsorManage from './Components/Admin/Sponsor/SponsorManage';
import SponsorDelete from './Components/Admin/Sponsor/SponsorDelete';
import ReportsList from './Components/Admin/Reports/ReportsList';
import ReportReply from './Components/Admin/Reports/ReportReply';
import TransitionList from './Components/Admin/TransitionList';
import OrgPendingList from './Components/Admin/Organization/OrgPendingList';
import OrgDelete from './Components/Admin/Organization/OrgDelete';
import OrgAccept from './Components/Admin/Organization/OrgAccept';
import OrgManage from './Components/Admin/Organization/OrgManage';
import OrgBlock from './Components/Admin/Organization/OrgBlock';
import OrgCreate from './Components/Admin/Organization/OrgCreate';
import CreateAdminEvent from './Components/Admin/Eevents/CreateAdminEvent';


function App() {
  return (
    <>
      <Router>
        <Switch>
         
          {/* <Route exact path="/" component={Signin} />
          <Route  path="/signup" component={Signup} /> */}

{/* /////////////////Admin/////////////////////////////// */}

<Route  path="/admin/dashboard" component={AdminHome} />
<Route  path="/admin/category" component={Category} />
<Route  path="/admin/delete-category/:id" component={DeleteCategory} />
<Route  path="/admin/edit-category/:id" component={EditCategory} />

<Route  path="/admin/createAdmin" component={CreateAdmin} />
<Route  path="/admin/manageAdmin" component={AdminManage} />
<Route  path="/admin/adminDelete/:id" component={AdminDelete} />
<Route  path="/admin/adminEdit/:id" component={AdminEdit} />

              {/* Admin Sponsor Start */}
<Route  path="/admin/sponsor" component={PendingSponsorList} />
<Route  path="/admin/sponsorAccept/:id" component={SponsorAccept} />
<Route  path="/admin/sponsorManage" component={SponsorManage} />
<Route  path="/admin/sponsorDelete/:id" component={SponsorDelete} />
              {/* Admin Sponsor END */}

              {/* Admin Reports Start */}
<Route  path="/admin/reports" component={ReportsList} />
<Route  path="/admin/reportsReply/:id" component={ReportReply} />
              {/* Admin Reports END */}

              {/* Admin Organization Start */}
<Route  path="/admin/pendingOrg" component={OrgPendingList} />
<Route  path="/admin/pendingOrgdelete/:id" component={OrgDelete} />
<Route  path="/admin/pendingOrgAccept/:id" component={OrgAccept} />
<Route  path="/admin/orgManage" component={OrgManage} />
<Route  path="/admin/orgManageBlock/:id" component={OrgBlock} />
<Route  path="/admin/orgCreate" component={OrgCreate} />
              {/* Admin Organization END */}

              {/* Admin Event Start */}
<Route  path="/admin/createAdminEvent" component={CreateAdminEvent} />
              {/* Admin Event END */}

<Route  path="/admin/transitionList" component={TransitionList} />

{/* //closeadmin */}

{/* /////////////////ORG/////////////////////////////// */}


<Route path="/organization" component={OrgHome} />
<Route path="/org/createEvent" component={CreateEvent} />
<Route path="/org/createVolEvent" component={CreateVolEvent} />
<Route path="/org/EventList" component={EventList}/>
<Route path ="/org/edit-event/:id" component={EditEvent}/>
<Route path ="/org/delete-event/:id" component={DeleteEvent} />

{/* //closeorg */}

{/* /////////////////Sponsor/////////////////////////////// */}
<Route path="/sp/test" component={SpTest} />
<Route path="/sp/dashboard" component={SponsorHome} />
<Route path="/sp/allAdvertiser" component={ListOfAdvertise} />
<Route path="/sp/addAdvertise" component={AddAdvertise} />
<Route path="/sp/OngoingEvents" component={OngoingEvents} />
<Route path="/sp/SpTransactionList" component={SpTransactionList} />





{/* //closesponsor */}

{/* ////////////////////User//////////////////////////// */}







{/* //closeuser */}






          
        </Switch>
      </Router>
    </>
  );
}

export default App;
