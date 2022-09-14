import React from 'react'
import { GoodsItemElem } from './goods'

export default function GoodsItem( {img,name,price} ) {
  return (
    <GoodsItemElem>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
    </GoodsItemElem>
  )
}
