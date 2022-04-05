import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'
// import GoogleButton from 'react-google-button'
// import axios from 'axios'
import { LoginSuccess } from './pages/LoginSuccess'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/action'


// import { login } from './redux/action'


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 31px;
`;

export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(({userReducer}) => userReducer.user )
  const isAuthenticated = useSelector(({userReducer}) => userReducer.isAuthenticated)


  useEffect(() => {
    dispatch(login("https://www.api.dsarea.com/api/auth/user"))
  }, [dispatch])
  console.log(user, isAuthenticated, '<<,')
  return (
    <AppContainer>
    <BrowserRouter>
    <Switch>
      { user && isAuthenticated ? 
        <Route path="/welcome" component={Welcome} />
        :  <Route exact path="/login" component={Login} />
      }
      <Route exact path="/">
        Welcome Home!
        <Link to="/login">Login</Link>
      </Route> 
      
        {/* <GoogleButton onClick={redirectToGoogleSSO} /> */}
      
      <Route exact path="/login/success" component={LoginSuccess} />
      <Route path="/login/failed">
        Error loging in. Please try again later!
      </Route>
    </Switch>
    </BrowserRouter>
  </AppContainer>
  )
}
