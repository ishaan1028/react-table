import { addDays, format, subDays } from 'date-fns';
import React, { useEffect, useState } from 'react'

const Test = () => {
    const [arr,setArr]=useState([1,2,3,4]);
    const [c,setC] =useState(5);
    
  return (<div>  
      {arr.map(item=>
       <TestT key={Math.random()}/>
    //    <TestT key={item} item={item} setC={setC}  c={c} />
      )}
      <button onClick={()=>setArr((a)=>[...a,5])}>add item</button>
        <TestH c={c}/>
        {/* <TestH key={c} /> */}
       </div>
 
  )
}

export default Test


const TestH = ({c}) => {
    const [sc,setSC] =useState(0);

    console.log('TESTH', sc)
    useEffect(()=>{
    console.log('TESTH cdm')
    },[]);

  return (
    <div>
    <label htmlFor="offset">counter {c}
   <input   name='c' type="number" value={sc} onChange={(e)=>setSC(e.target.value)}/>
   </label>
        </div>
  )
}
const TestT = () => {
    console.log('TESTT')
    useEffect(()=>{
    console.log('TESTT cdm')
    },[]);
  return <h1>item</h1>
}
// const TestT = ({c,item,setC}) => {
//     console.log('TESTT',item)
//     useEffect(()=>{
//     console.log('TESTT cdm')
//     },[]);
//   return (
//     <div style={c===item?{backgroundColor:"blue"}:{}} onClick={()=>setC(item)}>
//     item {item}
// </div>
//   )
// }
