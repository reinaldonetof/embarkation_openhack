import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core';
import { Redirect } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'

import './styles.css'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  `;

const LogOut = () => {
  const [logout, setLogout] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLogout(true)
    }, 2500)
  }, [])
  
  if(logout) {
    return <Redirect to='' />
  }
  return (
    <div className="background-logout">
      <HashLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={'#ff3333'}
        loading={true}
      />
      <h1>You'll be disconnect</h1>
    </div>
  )
}

export default LogOut