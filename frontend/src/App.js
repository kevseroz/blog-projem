import { Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles';

import Homepage from './homepage';
import PostDetail from './postdetail';

import AboutUs from './aboutus'
import Footer from './footer'
import Header from './header';
import SignupScreen from './screens/signupscreen'
import SigninScreen from './screens/signinscreen'
import PostScreen from './screens/postscreen'
import ErrorScreen from './screens/errorscreen'
import PrivateRoute from './restrictedRoute';
import store from './store';
import { setAuthorizationToken, setCurrentUser } from "./actions/useractions";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch} from 'react-redux';
import ScrollToTop from './scrolltotop'



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    }
});
//const st = store();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  const auth = useSelector(state => state.userSignin);
    const { isAuthenticated } = auth;
  const classes = useStyles();
  return (
    <div className="App">
       <div className={classes.root}>
            <Header />
            <ScrollToTop>
      <Switch>
      <Route exact path="/" component={ ()  => (<Homepage />) } />
      <PrivateRoute exact path="/admin/urunler875548674" component={() => (<PostScreen />)} />
      <Route exact path="/signin48235" component={() => (isAuthenticated? <Homepage/>:<SigninScreen />)} />
      <Route exact path="/signup48235" component={() => (isAuthenticated? <SignupScreen/>:<SigninScreen />)} />
      <Route exact path="/post/:id" component={(props) => (<PostDetail {...props} />)} />
      <Route exact path="/hakkimizda" component={() => (<AboutUs />)} />
      <Route component={() => (<ErrorScreen />)} />
      </Switch>
      </ScrollToTop>
      <Footer />
        </div>
    </div>
  );
}

export default App;

