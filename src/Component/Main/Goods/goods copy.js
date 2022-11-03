import styled from 'styled-components'

export const GoodsParent=styled.div`
   display:grid;
   grid-template-columns:repeat(4,25%);
   grid-template-rows:repeat(2,auto);
   gap:10px;
`
export const GoodsItemElem=styled.div`
    border-radius:10px;
    display:flex;
    flex-direction:column;
    box-shadow:1px 1px 5px 1px #60505078;
    position:relative;
    img{
        border-radius:10px;
    }
    .addGoods_parent{
        position:absolute;
        bottom:60px;
        background:#1E2832;
        padding:10px 0;
        width:100%;
    }
    .addGoods{
        width:90%;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .basket{
        display:flex;
        align-items:center;
        gap:10px;
    }
    .basket span{
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        color: #FFFFFF;
    }
    .heart_fill{
     fill:red;
    }
`