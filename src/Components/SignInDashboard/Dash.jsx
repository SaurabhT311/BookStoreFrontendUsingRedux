import React, { useState } from 'react';
import './Dash.scss';
import logo from '../../Assets/login.png';
import SignIn from '../LogIn/Login';
import SignUp from '../SignUp/SignUp';
import { Route, Switch } from 'react-router-dom';


export default function Login(props) {

    const [login, setlogin] = useState(true)
    const [Signup, setSignup] = useState(false)


    const nextPath = (path) => {
        props.history.push(path);
    };



    const loginSelect = () => {
        setlogin(true)
        setSignup(false)
        nextPath("/book-store/login");
    };

    const SignupSelect = () => {
        setlogin(false)
        setSignup(true)
        nextPath("/book-store/signup");
    };


    return (
        <div className="login_container">
            {/* main box */}
            <div className="borders">
                {/* fig box */}
                <div className="box_field">
                    <div className="image_field">
                        <img src={logo} height="225" className="image" ></img>
                        <p className="text_field">
                            <b> ONLINE BOOK SHOPPING</b>
                        </p>
                    </div>
                </div>

                <div className="form">
                    <div className="form_input">
                        <div className="header">
                            <div className="login">
                                <button className="btn" text="test" onClick={loginSelect}>
                                    <b> LOGIN</b>
                                </button>
                                <button className="btn" text="test" onClick={SignupSelect}>
                                    <b>SIGNUP</b>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <Switch>
                            <Route path="/book-store/login">
                                <SignIn />
                            </Route>
                            <Route path="/book-store/signup">
                                <SignUp />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}