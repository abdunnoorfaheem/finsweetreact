import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className={`rounded-[41px]  ${props.className}`}>{props.text}</button>
    </>
  )
}

export default Button
