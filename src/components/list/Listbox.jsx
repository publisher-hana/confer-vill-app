import React from 'react'
import { Link } from 'react-router-dom'

const Listbox = ({link,title,date,label, labelClass}) => {
  return (
    <>
       <div className='box m0'>
          <Link to={link}>
            <strong className='ellipsis'>{title}</strong>
            <span className='tail'>{date}</span>
            {label && <span className={`label ${labelClass ? labelClass : ''}`}>{label}</span>}
          </Link>
        </div>
    </>
  )
}

export default Listbox