import React from 'react'



function Search({setCurrency}) {

    const currencyHandeler=()=>{
        setCurrency(event.target.value)
      }
      
  return (
    <div>
        <input type="text" name="" id="" />

       <select onChange={()=>currencyHandeler()} name="currency" id="currency">
         <option value="usd">USD</option>
         <option value="eur">EUR</option>
         <option value="jpy">JPY</option>
       </select>
       
    </div>
  )
}

export default Search