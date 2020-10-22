import React, {useState} from 'react'
import './Register.css'
import {connect} from 'react-redux'
import {register} from '../../actions'
import {useHistory} from 'react-router-dom'
import { isEmail } from "validator";

export const Register = connect()(({dispatch}) => {

    const [form, setForm] = useState({
      email: '',
      password: ''
    })
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
    const registerHandler = () => {
      if (Object.values(form).every(el => el.trim())) {
        dispatch(register({...form}))
          .catch(e => alert(e.message || 'Error'))
      } else {
        alert('Fill in all the fields')
      }
    }

    const history = useHistory()

    const changeHandler = ({target}) =>
      setForm({...form, [target.name]: target.value})

    return (
      <div className="auth-container">
        <img
          src="https://www.shareicon.net/data/2015/11/11/670346_board_512x512.png"
          alt="Board"/>
        <div className="login-form">
          <p>Sign up to Boards</p>
          <h4>if Not redirected please refresh</h4>
          <input type="text" value={form.email}
                 onChange={changeHandler} name="email"
                 placeholder="Enter Your Email Id"
                 validations={[required,validEmail]}
          />
          <input type="password" value={form.password}
                 onChange={changeHandler} name="password"
                 placeholder="Enter Your Password"
                 />
          <div className="login-btn hovered"
               onClick={registerHandler}
          >
            <p>Register now</p>
          </div>
          <p className="or">OR</p>
          
          <p className="login hovered"
             onClick={() => history.push('/login')}
          >Login</p>
        </div>
      </div>
    )
  }
)
