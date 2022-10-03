import React from "react";
import { useSelector } from "react-redux";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite);
const result = [];
const map = new Map();
for (const item of favorite) {
    if(!map.has(item.id)){
        map.set(item.id, true); 
        result.push({
            id: item.id,
            name: item.name,
            count:item.count,
            price:item.price,
            img:item.img
        });
    }
}


  return (
    <div>
      {result.map(i=>(
        <div key={i.id}>
          <h2>{i.name}</h2>
          <img src={i.img} alt=""/>
         <p>{i.price}</p>
        </div>
      ))}
   <p>
        total:
        {/* {favorite.reduce((sum, i) => sum + i.price, 0)} */}
      </p>
    </div>
  );
}
