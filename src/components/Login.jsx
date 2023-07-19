import React from 'react'
import { useState } from 'react';
import { Form, FormGroup, Input, Label, FormFeedback, Button } from 'reactstrap'


export const Login = ({setIsLoggedIn}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValidUsername, setIsValidUsername] = useState(null)
    const [isValidPassword, setIsValidPassword] = useState(null)
    const handleCheckUsername=()=>{
        //console.log(username, import.meta.env.VITE_USERNAME );
        username==import.meta.env.VITE_USERNAME ? setIsValidUsername(true) : setIsValidUsername(false)
        console.log(isValidUsername);

    }

    const handleLogin =()=>{
        if(password==import.meta.env.VITE_PW){
            setIsValidPassword(true)
             console.log('Successful login');
             setIsLoggedIn(true)
    }
        else
        setIsValidPassword(false)
        }
        
       
  return (
    <Form className='login border p-3 shadow mt-1 rounded'>
    <FormGroup>
    <Label for="username">Username:</Label>
    <Input id="username"  
        value={username}
        onChange={(event)=> setUsername(event.target.value)}
        onBlur={handleCheckUsername}
        className={isValidUsername==null ? "" : (isValidUsername ? "is-valid" : "is-invalid")}
        />
    <FormFeedback>Invalid username</FormFeedback>
  </FormGroup>

  <FormGroup>
    <Label for="password">Password:</Label>
    <Input id="password" autoFocus type='password'
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        className={isValidPassword==null ? "" : (isValidPassword ? "is-valid" : "is-invalid")}
        />
    <FormFeedback>Invalid password</FormFeedback>
  </FormGroup>


    <div><Button 
            type="button"
            color="primary"
            onClick={handleLogin}
            disabled={!password || !isValidUsername }
            > Login</Button>
    </div>
  



  </Form>
  );
};
