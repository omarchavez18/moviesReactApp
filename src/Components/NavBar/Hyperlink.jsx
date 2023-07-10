import React from 'react'

function Hyperlink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {' '}
      {children}
    </a>
  )
}

export default Hyperlink
