import React, {useState} from 'react'
import './Login.css'
import {connect} from 'react-redux'
import {login} from '../../actions'
import {useHistory} from 'react-router-dom'
import { isEmail } from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export const Login = connect()(({dispatch}) => {
  const history = useHistory()
    const [form, setForm] = useState({
      email: '',
      password: ''
    })

    const loginHandler = () => {
      if (Object.values(form).every(el => el.trim())) {
        dispatch(login({...form}))
          .catch(e => alert(e.message||'Error'))
          history.replace("/boards")
          
      } else {
        alert('Fill in all the fields')
      }
    }

    
    const validEmail = (value) => {
      if (!isEmail(value)) {
        return (
          <div className="alert alert-danger" role="alert">
            This is not a valid email.
          </div>
        );
      }
    };
    const required = (value) => {
      if (!value) {
        return (
          <div className="alert alert-danger" role="alert">
            This field is required!
          </div>
        );
      }
    };
    const changeHandler = ({target}) =>
      setForm({...form, [target.name]: target.value})

    return (
      <div className="auth-container">
        <img
          src="https://www.shareicon.net/data/2015/11/11/670346_board_512x512.png"
          alt="Board"/>
        <div className="login-form">
          <h4>if Not redirected please refresh</h4>
          <p>Login to Boards</p>
          <input type="text" value={form.email}
                 onChange={changeHandler} name="email" 
                 placeholder="Enter Your Email Id"
          />
          <input type="password" value={form.password}
                 onChange={changeHandler} name="password"
                 placeholder="Enter Your Password"
                 validations={[required,validEmail]}
                 />
          <div className="login-btn hovered"
               onClick={loginHandler}
          >
            <p>Login</p>
          </div>
          <p className="or">OR</p>
          
          <p className="register hovered"
             onClick={() => history.push('/register')}
          >Register now</p>
        </div>
      </div>
    )
  }
)
