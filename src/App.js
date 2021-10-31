import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddServices from "./components/AddServices/AddServices";
import ManageServices from "./components/ManageServices/ManageServices";
import ConfirmBooking from "./components/ConfirmBooking/ConfirmBooking";
import ManageUser from "./components/ManageUser/ManageUser";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addService'>
              <AddServices></AddServices>
            </Route>
            <Route path='/manageservices'>
              <ManageServices></ManageServices>
            </Route>

            <Route path='/manageusers'>
              <ManageUser></ManageUser>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path='/confirmbooking'>
              <ConfirmBooking></ConfirmBooking>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
