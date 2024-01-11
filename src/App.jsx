import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import './Components/Styles/Landing.css'
import './Components/Styles/Landing2.css'
import Landing from './Components/Landing'
import gsap from 'gsap'
import Landing2 from './Components/Landing2'
import PageTwo from './Components/PageTwo'
function App() {

  return (
    <>
      {/* <Landing/> */}
      <Landing2 />
      <PageTwo />
    </>
  )
}

export default App
