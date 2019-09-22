import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import{ Player } from 'video-react'

import './styles.css'
import videoBack from '../../assets/videobackground/embarkation.mp4'
import poster from '../../assets/videobackground/poster.png'
import gif from '../../assets/videobackground/gif_embark.gif'
import backgroundPng from '../../assets/backgroundimage/hackathon.gif'

const Welcome = () => {
  const[bSignIn, setBSignIn] = useState(false)
  const[bSignUp, setBSignUp] = useState(false)
  const[visible, setVisible] = useState('none')
  const[opDiv, setOpDiv] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setVisible("flex");
      setOpDiv(1)
    }, 3800)
  }, [])

  if(bSignIn) {
    return <Redirect to='signin' />
  }

  if(bSignUp) {
    return <Redirect to='signup' />
  }

  return (
    <div className={"background-welcome"}>
      <div className={"background-welcome-2"} style={{ opacity: opDiv }}></div>
      <div className={"welcome"} style={{ display: visible }}>
        <button onClick={() => setBSignIn(true)}>Sign In</button>
        <button onClick={() => setBSignUp(true)}>Sign Up</button>
      </div>
    </div>
  );
}

export default withRouter(Welcome)