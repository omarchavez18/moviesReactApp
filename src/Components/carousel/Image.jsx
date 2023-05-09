import React from "react";

function Image({ src, ...otherInfo }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={src} {...otherInfo} />;
}

export default Image;
