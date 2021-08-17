import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrgHome from './Components/Org/OrgHome';
import CreateEvent from './Components/Org/CreateEvent';
import CreateVolEvent from './Components/Org/CreateVolEvent';
import EventList from './Components/Org/EventList';
import EditEvent from './Components/Org/EditEvent';
import DeleteEvent from './Components/Org/DeleteEvent';
import EventTransaction from './Components/Org/EventTransaction';
import RefundMoney from './Components/Org/RefundMoney';
import SponsorReq from './Components/Org/SponsorReq';
import SponsorList from './Components/Org/SponsorList';
import RenewSpons from './Components/Org/RenewSpons';
import ApproveSponsor from './Components/Org/ApproveSponsor';
import CancelDeal from './Components/Org/CancelDeal';
import RenewDeal from './Components/Org/RenewDeal';
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


<Route  path="/organization" component={OrgHome} />
<Route path="/org/createEvent" component={CreateEvent} />
<Route path="/org/createVolEvent" component={CreateVolEvent} />
<Route path="/org/EventList" component={EventList}/>
<Route path ="/org/edit-event/:id" component={EditEvent}/>
<Route path ="/org/delete-event/:id" component={DeleteEvent} />
<Route path="/org/EventTransactionList" component={EventTransaction} />
<Route path="/org/refund-money/:id" component={RefundMoney} />
<Route path ="/org/SponsorRequest" component={SponsorReq}/>
<Route path ="/org/SponsorList" component={SponsorList}/>
<Route path ="/org/RenewSponsor" component={RenewSpons}/>
<Route path ="/org/Approve-Sponsor/:id" component={ApproveSponsor}/>
<Route path ="/org/Cancel-deal/:id" component={CancelDeal}/>
<Route path ="/org/Renew-Deal/:id" component={RenewDeal}/>


          
{/* //closeorg */}

{/* /////////////////Sponsor/////////////////////////////// */}






{/* //closesponsor */}

{/* ////////////////////User//////////////////////////// */}







{/* //closeuser */}






          
        </Switch>
      </Router>
    </>
  );
}

export default App;
