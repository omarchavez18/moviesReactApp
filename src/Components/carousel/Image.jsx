import React from 'react'

function Image({ href, src, className, ...otherInfo }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <a href={href}>
      <img className={className} src={src} {...otherInfo} alt='' />{' '}
    </a>
  )
}

export default Image
