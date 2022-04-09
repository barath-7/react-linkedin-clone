import React from 'react'
import './InputOption.css'
const InputOption = (props) => {
    const {Icon, title,color} = props
  return (
    <div className='inputOptions'>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption