import React from 'react'

function Image({ src, className, ...otherInfo }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img className={className} src={src} {...otherInfo} />
}

export default Image
