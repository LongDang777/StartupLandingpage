import React from 'react'
import './button.scss'

export default function Button(props) {
  return (
    <button className={`btn ${props.className || ''}`}>{props.children}</button>
  )
}
