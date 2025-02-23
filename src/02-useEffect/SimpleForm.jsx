import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'alejandro',
    email: 'ale@gmail.com',
  })
  
  const {username, email} = formState
  
  const onInputChange = ({target}) => {
    const {name, value} = target
    
    setFormState({
      ...formState,
      [name]: value,
    })
  }
  
  useEffect(() => {
    // console.log('useeffect')
  }, []);
  
  useEffect(() => {
    // console.log('formstate changed')
  }, [formState]);
  
  useEffect(() => {
    // console.log('email changed')
  }, [email]);
  
  return (
    <>
      <h1>Simple Form</h1>
      <hr/>
      <input
        type={"text"}
        className={"form-control"}
        placeholder={"Username"}
        name={"username"}
        value={username}
        onChange={onInputChange}
      />
      <input
        type={"email"}
        className={"form-control mt-2"}
        placeholder={"mail@google.com"}
        name={"email"}
        value={email}
        onChange={onInputChange}
      />
      
      {
        username === 'alejandro' && <Message/>
      }
    </>
  )
}
