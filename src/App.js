import './App.css';
import Dash from './Components/SignInDashboard/Dash'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './Components/DashBoard/DashBoard';
// import store from'./Components/Redux/store'
import BookHeader from './Components/BookHeader/BookHeader'
import {Provider} from 'react-redux'
// import { AppBar } from '@material-ui/core';

function App() {
  return (
    <div className="App"> 
    {/* <BookHeader /> */}
    {/* <Dashboard/> */}
       <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/book-store/login" exact />
          <Route path="/book-store" component={Dash}/>
          <Route path="/dashBoard" component={BookHeader}/>
          </Switch>
          </BrowserRouter>

    </div>
  );
}

export default App;
