import React from 'react'

export default function LogOut() {
const logOut= false
localStorage.setItem('isLogged', logOut)
}