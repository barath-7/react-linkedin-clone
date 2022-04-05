import React from 'react'
import './HeaderOption.css'

const HeaderOption = (props) => {
    const {Icon, title} = props
  return (
    <div className="headerOption">
        {Icon && <Icon className='headerOption__icon' /> }
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption