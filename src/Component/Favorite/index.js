import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorite() {
  const favorite=useSelector(state=>state);
  return (
    <div></div>
  )
}
