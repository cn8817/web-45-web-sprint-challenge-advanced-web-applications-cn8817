import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory()

  const initialState = {
    credentials: {
      username: '',
      password: '',
    }
  }

  const [user, setUser] = useState(initialState)
  const [error, setError] = useState('')

      const handleChange = e => {
        setUser({
          credentials: {
            ...user.credentials,
            [e.target.name]: e.target.value,
          }
        })
      }

      const handleSubmit = e => {
        e.preventDefault()
        setError('Username or Password not valid.')

        if(user.credentials.username === '' || user.credentials.pasword === ''){
          return error
        }

        else if(user.credentials.username === 'Lambda' || user.credentials.pasword === 'School'){
          axios.post('http://localhost:5000/api/login', user.credentials)
            .then(res => {
              localStorage.setItem("token", res.data.payload)
              push('/bubble-page')
            })
            .catch(err => {
              console.log(err)
            })
              }
              push('/bubble-page')
      }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            value={user.credentials.username}
            onChange={handleChange}
            id='username'
          />
          <input
            type='password'
            name='password'
            value={user.credentials.password}
            onChange={handleChange}
            id='password'
          />
          <button id='submit'>Log in</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"