// import React from "react";

    

// export default function FuncComp(){
//     return(
//         <React.Fragment>
//         <h2>barev</h2>
//         <p>gfhdjbms</p>
//         <p>jhsbnc</p>
//         </React.Fragment>
//     )
// }


// export default function FuncComp(props){
//     return(
//         <>
//         <h2>{props.name}</h2>
//         <p>{props.age}</p>
//         </>
//     )
// }

// export default function FuncComp(props){
//     const { name,age }=props;
//     return(
//         <>
//         <h2>{name}</h2>
//         <p>{age}</p>
//         </>
//     )
// }


export default function FuncComp( { name,age }){
    return(
        <>
        <h2>{name}</h2>
        <p>{age}</p>
        </>
    )
}