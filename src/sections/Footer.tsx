import React from 'react'
import pokeball_icon from '../assets/pokeball-icon.png'
import {MdOutlinePowerSettingsNew} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <div className="block">
        <img src={pokeball_icon} alt="pokeball" />
      </div>
      <div className="footerdata"></div>
      <div className="block">
        <MdOutlinePowerSettingsNew />
      </div>
    </footer>
  )
}

export default Footer