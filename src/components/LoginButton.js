import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
import { Button } from 'react-bootstrap';
const LoginButton = () => {
    const {isAuthenticated,loginWithRedirect,}=useAuth0();
    
    return !isAuthenticated &&( <Button
     onClick={()=>loginWithRedirect()}
     variant='outline-secondary '>
        Login
    </Button> );
}
 
export default LoginButton;