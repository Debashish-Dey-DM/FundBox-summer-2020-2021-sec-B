import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReportReply from './Components/User/ReportReply';
import UserHome from './Components/User/UserHome.js';
import Report from './Components/User/Report';
import TransitionDetails from './Components/User/TransitionDetails.js';
import OrganizationList from './Components/User/OrganizationList.js';
import OrganizationDetails from './Components/User/OrganizationDetails';
import OrganizationEvents from './Components/User/OrganizationEvents';
import FollowedOrganization from './Components/User/FollowedOrganization';
import YourAppliedVolunteerEvents from './Components/User/YourAppliedVolunteerEvents';
import CategoryList from './Components/User/CategoryList';
import UserMenuBar from './Components/User/UserMenuBar';
import Events from './Components/User/Events';
import Review from './Components/User/Review';
import OrganizationFollow from './Components/User/OrganizationFollow';

function App() {
  return (
    <>

    
      <Router>
        <Switch>
         
          {/* <Route exact path="/" component={Signin} />
          <Route  path="/signup" component={Signup} /> */}

{/* /////////////////Admin/////////////////////////////// */}






{/* //closeadmin */}

{/* /////////////////ORG/////////////////////////////// */}






{/* //closeorg */}

{/* /////////////////Sponsor/////////////////////////////// */}






{/* //closesponsor */}

{/* ////////////////////User//////////////////////////// */}

<Route path="/user/home" component={UserHome} />
<Route path="/user/userMenuBar" component={UserMenuBar} />
<Route path="/user/transitionDetails" component={TransitionDetails} />
<Route path="/user/organizationList" component={OrganizationList} />
<Route path="/user/organizationDetails/:id" children={<OrganizationDetails/>}></Route>
<Route path="/user/organizationEvents/:id" children={<OrganizationEvents/>}></Route>
<Route path="/user/organizationFollow/:id" children={<OrganizationFollow/>}></Route>
<Route path="/user/report/:id" children={<Report/>}></Route>
<Route path="/user/report" ></Route>
<Route path="/user/reportReply" children={<ReportReply/>}></Route>
<Route path="/user/review/:id" children={<Review/>}></Route>
<Route path="/user/review"></Route>
<Route path="/user/followedOrganization" children={<FollowedOrganization/>}></Route>
<Route path="/user/yourAppliedVolunteerEvents" children={<YourAppliedVolunteerEvents/>}></Route>
<Route path="/user/categoryList" children={<CategoryList/>}></Route>

<Route path="/user/events" children={<Events/>}></Route>


{/* <Route path="/user/organizationList" component={UserHome} />
<Route path="/user/followedOrganization" component={UserHome} />
<Route path="/user/categoryList" component={UserHome} />

<Route path="/user/reportReply" component={UserHome} />
<Route path="/user/events" component={UserHome} />
<Route path="/user/yourAppliedVolunteerEvents" component={UserHome} /> */}





{/* //closeuser */}






          
        </Switch>
      </Router>
    </>
  );
}

export default App;
