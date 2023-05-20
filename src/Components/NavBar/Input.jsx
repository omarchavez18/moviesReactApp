import React from 'react'

const Input = ({ className, type, children, ...otherInfo }) => {
  return (
    <input className={className} type={type} {...otherInfo}>
      {children}
    </input>
  )
}

export default Input
