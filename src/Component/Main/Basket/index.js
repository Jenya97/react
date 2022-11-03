import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Basket() {
  const basket= useSelector(state=>state.basket);
  const dispatch=useDispatch()
  const basketItems = [];
const map = new Map();

for (const item of basket) {
    if(!map.has(item.id)){
        map.set(item.id, true); 
        basketItems.push({
            id: item.id,
            name: item.name,
            count:item.count,
            price:item.price,
            img:item.img
        })
    }
}
  return (
    <div>
      {basketItems.map((item)=>(
       <div key={item.id}>
       <h2>{item.name}</h2>
       <img src={item.img} alt=""/>
       <p>count:{item.count}</p>
       {item.count>0 ? <p>price:{item.count*item.price}</p> :<p>price:{item.price}</p> }
  
       <button onClick={()=>dispatch({
         type:'DELETE',
         payload:{
           id:item.id
           }
       })}>delete</button>
        </div>
      ))}
    </div>
  )
}
