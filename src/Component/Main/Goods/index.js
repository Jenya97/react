import React from 'react'
import { Container } from '../../../Css/component';
import data from './datagoods.json';
import { GoodsParent } from './goods';
import GoodsItem from './GoodsItem';

export default function Goods() {

  return (
    <Container>
      <GoodsParent>
        {data.map(item=>(
            <GoodsItem key={item.id} {...item}/>
        ))}
      </GoodsParent>
    </Container>
  )
}
