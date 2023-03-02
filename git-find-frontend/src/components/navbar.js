import React from 'react'
import './components.css'
import {AiFillGithub} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='d-flex align-items-center'>
        <AiFillGithub size="2em"/>
        <h3>Git Find</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar