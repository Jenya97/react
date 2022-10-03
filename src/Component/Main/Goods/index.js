import React from 'react'
import { Container } from '../../../Css/component';
import { GoodsParent } from './goods';
import GoodsItem from './GoodsItem';
import { useSelector } from 'react-redux';
export default function Goods() {
const products=useSelector(state=>state.products);
const favorite=useSelector(state=>state.favorite);

console.log(favorite);
  return (
    <Container>
      <GoodsParent>
        {products.map(item=>(
            <GoodsItem key={item.id} {...item}/>
        ))}
      </GoodsParent>
    </Container>
  )
}
