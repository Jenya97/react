import styled from 'styled-components'

export const GoodsParent=styled.div`
   display:grid;
   grid-template-columns:repeat(4,25%);
   grid-template-rows:repeat(2,500px);
   gap:10px;
`
export const GoodsItemElem=styled.div`
    border:1px solid;
    border-radius:10px;
    display:flex;
    flex-direction:column;
`