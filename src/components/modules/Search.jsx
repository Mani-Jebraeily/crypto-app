import React, { useEffect,useState } from 'react'
import { searchCoin } from '../../services/cryptoApi'

import { MoonLoader,SyncLoader} from "react-spinners";




function Search({setCurrency}) {
    const [text,setText]=useState("")
    const [coins,setCoins]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const currencyHandeler=()=>{
        setCurrency(event.target.value)
      }

      useEffect(()=>{

        const controller= new AbortController()

        setCoins([])

        if(!text) {
            setIsLoading(false)
            return

        }
        
        const search= async()=>{
            try {
                const res= await fetch(searchCoin(text),{signal:controller.signal})
                const json= await res.json()

                if(json.coins) {
                setCoins(json.coins)  
                setIsLoading(false)

                } else{
                    alert(json.status.error_message)
                }      
               } catch (error) {
            if(error.name !== "AbortError"){
                alert(error.message)
            }
                
            }
        
        }
        setIsLoading(true)
        search()
        return ()=> controller.abort()
      },[text])

      
  return (
    <div className='mt-12.5 relative'>
        <input type="text" placeholder='Search' onChange={()=>setText(event.target.value)}  className='w-[300px] h-[50px] p-2.5 text-[1.1rem] text-[#fff] bg-[#23242e] border-none rounded-sm  focus:outline-none'/>

       <select onChange={()=>currencyHandeler()} name="currency" id="currency" className='bg-[#23242e] h-12.5 border-none rounded-sm ml-5 text-[#fff] p-[0_10px] focus:outline-none'>
         <option value="usd">USD</option>
         <option value="eur">EUR</option>
         <option value="jpy">JPY</option>
       </select>
       
       {(!!coins.length || isLoading)&&
       (<div className='absolute top-15 w-[300px] h-[400px] rounded-sm overflow-y-scroll bg-[#18181c]  border-2 border-solid border-[#22262e] p-5 text-center '>

        {isLoading&&
        <div className= 'flex justify-center items-center h-full '>
        <SyncLoader   color="#fff"  sizes={35}/>
         
        </div>}

        <ul>
            {coins.map(coin=>(
                <li key={coin.id} className='flex items-center  mb-3.5 pb-1.5 border-b-2 border-b-[#22262e] '>
                    <img src={coin.thumb} alt={coin.name} className='mr-2.5 size-6' />
                    {coin.name}
                </li>
            ))}
        </ul>
        
     </div>
       )
       }


       
    </div>
  )
}

export default Search