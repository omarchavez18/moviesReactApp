import React from 'react'

const Button = ({ className, children, type, ...otherInfo }) => {
  return (
    <button className={className} type={type} {...otherInfo}>
      {children}
    </button>
  )
}

export default Button
