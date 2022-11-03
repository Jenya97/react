import React, { useState } from 'react'
import { GoodsItemElem } from './goods';
import basket from './basket.svg';
import heart from './heart.svg';
import fill_heart from './fill_heart.svg';
import { useDispatch } from 'react-redux';

export default function GoodsItem( {id,img,name,price} ) {
  const [display,setDisplay]=useState(false);
  const [fill,setFill]=useState(Boolean(false));
  const dispatch=useDispatch();
  const fav_add=()=>{
      dispatch({
        type:"ADD_FAVORITE",
        payload:{
          id:id
        }
      })
      setFill(Boolean(!fill))
  }
  return (
    <GoodsItemElem onMouseMove={()=>setDisplay(true)}
      onMouseLeave={()=>setDisplay(false)}>
      <img src={img} alt=""/>
     { display && 
       <div className="addGoods_parent">
       <div className="addGoods">
      <img src={fill ? fill_heart : heart} alt="" onClick={fav_add} />
      <div className='basket'  onClick={()=>dispatch({
         type:'ADD_BASKET',
         payload:{
          id:id
        }
       })}>
      <img src={basket} alt="" />
       <span>Shop now</span>
      </div>
      </div>
      </div>
      }
      <h2>{name}</h2>
      <p>{price}</p>
      
    </GoodsItemElem>
  )
}
