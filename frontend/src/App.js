import logo from './logo.svg';
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
function App() {
  return (
    <>
      <Router>
        <Switch>
         
          {/* <Route exact path="/" component={Signin} />
          <Route  path="/signup" component={Signup} /> */}

{/* /////////////////Admin/////////////////////////////// */}


<Route  path="/admin/category" component={Category} />
<Route  path="/admin/delete-event/:id" component={DeleteCategory} />



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






{/* //closesponsor */}

{/* ////////////////////User//////////////////////////// */}







{/* //closeuser */}






          
        </Switch>
      </Router>
    </>
  );
}

export default App;
