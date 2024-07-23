import React, { useState } from 'react'
import LoginContext from './contexts/AuthContext'
import InitialPage from './components/InitialPage'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import usersArray from "../src/users"

import "./App.css"


export default function App() {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const [usersData, setUsersData] = useState(usersArray);

  const loginUser = (username, password) => {
    setUsersData(prevUsers =>
      prevUsers.map(user => {
        if (user.username === username && user.password === password) {
          return {
            ...user,
            isLoggedIn: true
          };
        } else {
          return user;
        }
      })
    );
  };

  const logoutUser = (username) => {
    setUsersData(prevUsers =>
      prevUsers.map(user => {
        if (user.username === username && user.isLoggedIn) {
          return {
            ...user,
            isLoggedIn: false
          };
        } else {
          return user;
        }
      })
    );    
    setShowLoginForm(false)
  };

  function handleLoginSubmit(username, password) {
    loginUser(username, password)
    const user = usersData.find(user => (user.username === username && user.password === password))
    if (user && user.isLoggedIn) {
      setShowLoginForm(false)
    }
  }

  function handleSigninClick() {
    setShowLoginForm(true)
  }

  const isLoggedIn = usersData?.some(user => user.isLoggedIn)

  return (
    <LoginContext.Provider value={{loginUser, logoutUser, usersData}}>
      {
        isLoggedIn ? (
          <Dashboard />
        ) : (
          showLoginForm ? (
            <LoginPage handleLoginSubmit={handleLoginSubmit} />
          ) : (
            <InitialPage handleSigninClick={handleSigninClick} />
          )
        )}
    </LoginContext.Provider>
  )
}