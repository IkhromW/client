import React from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../redux/action'

export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()

    const fetchAuthUser = () => {
        dispatch(login("https://www.api.dsarea.com/api/auth/user"))
        history.push('/welcome')
    }
    const redirectToGoogleSSO =  () => {
        let timer = null;
        const googleLoginURL = "https://www.api.dsarea.com/api/auth/login/google";
        const newWindow = window.open(
          googleLoginURL,
          "_blank",
          "width=500,height=600"
        );
    
        if (newWindow) {
          timer = setInterval(() => {
            if (newWindow.closed) {
              console.log("Yay we're authenticated");
              fetchAuthUser();
              if (timer) clearInterval(timer);
            }
          }, 500);
        }
      };
  return (
      <div>
        <GoogleButton onClick={redirectToGoogleSSO} />
      </div>
  )
}
