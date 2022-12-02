import React from "react";
import {  Button } from 'semantic-ui-react'

export default function LoginSummary() {
    function logOut (){
        localStorage.removeItem('isOn')
        window.location.reload()
      }
  return (
    <>
      <Button onClick={logOut}>Déconnection</Button>
    </>
  );
}
