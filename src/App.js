
import './App.css';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import store from './redux/store'
import Body from './Components/body/Body'
import FetchList from './Components/schedulingmodule/FetchList';
import Modify from './Components/schedulingmodule/Modify';
import ScheduleForm from './Components/schedulingmodule/ScheduleForm'
import Search from './Components/schedulingmodule/Search'
import ModifyActions from './Components/schedulingmodule/ModifyActions'
import GetList from'./Components/flightModule/GetList'
import AddFlight from './Components/flightModule/AddFlight'
import AirportsList from './Components/airportmodule/AirportsList'
import SignUp from './Components/usermodule/SignUp'
import Home from './Components/Home'
import SignUpAction from './Components/usermodule/SignUpAction'
import Login from './Components/usermodule/Login';
import AddAirport from './Components/airportmodule/AddAirport';
import ModifyFlight from './Components/flightModule/ModifyFlight';
import ModifyFlightAction from './Components/flightModule/ModifyFlightAction';
import LoginAction from './Components/usermodule/LoginAction';
import HomeBooking from './Components/bookingmodule/HomeBooking';
import SearchFlightAction from './Components/bookingmodule/SearchFlightAction'
import SearchFlights from './Components/bookingmodule/SearchFlights'
import MyBookings from './Components/bookingmodule/MyBookings';
import AddBooking from './Components/bookingmodule/AddBooking';
import Logout from './Components/Logout'
import Profile from './Components/Profile';
import ProfileBooking from './Components/bookingmodule/ProfileBooking';




function App() {
  return (
    <Router>
    <Provider store={store}>
    <div className="App">
      <Switch>

        <Route exact path="/body"  component={Body}/>

        <Route exact path="/booking" component={HomeBooking}/>

        <Route exact path="/" component={Home}/>
        <Route  path="/addflight" component={AddFlight }/>
        <Route path="/flightslist" component={GetList}/>
        <Route path="/airportslist" component={AirportsList}/>

        <Route exact path="/searchflightaction" component={SearchFlightAction}/>

          <Route path="/modify"  component={Modify} />

          <Route path="/profilebooking" component={ProfileBooking}/>

          <Route path="/search" component={Search} />

          <Route path="/searchflightaction" component={SearchFlightAction}/>

          <Route path="/searchflights" component={SearchFlights}/>

          <Route path="/mybookings" component={MyBookings} />

          <Route path="/addbooking" component={AddBooking} />

          <Route path="/profile" component={Profile}/>

           <Route path="/scheduledflightslist" component={FetchList}/>   

          <Route path="/scheduleflight" component={ScheduleForm} />

          <Route path="/modifyactions" component={ModifyActions }/>
         
          <Route path="/signupactions" component={SignUpAction} />

          <Route path="/loginactions" component={LoginAction} />
    
          <Route path="/signup" component={SignUp}/>
        
          <Route path="/login" component={Login}/>

          <Route path="/logout" component={Logout}/>

          <Route path="/addairport" component={AddAirport}/>

          <Route path="/modifyflight" component={ModifyFlight}/>

        <Route path="/modifyflightactions" component={ModifyFlightAction}/>
      </Switch>
     
    </div>
    </Provider>
    </Router>
  );
}

export default App;
