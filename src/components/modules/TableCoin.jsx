import React from 'react'



import ChartDown from '../../assets/chart-down.svg'
import ChartUp from '../../assets/chart-up.svg'

import { BarLoader } from "react-spinners";

<style>
    <body>
        border-bottom:2px solid #fff
    </body>
</style>


function TableCoin({coins,isLoading}) {
  return (
    <>
    <div className=' min-h[1000px] ma x-w[1000px] flex justify-center m-[50px_0px_100px]  '>
        {isLoading? 
            <div className=' h-[1000px] flex  justify-center items-center'><BarLoader  width={200}  color="white"/></div>          
            :
      <table className='sm:table  sm:overflow-visible block overflow-x-scroll w-[100%] border-collapse'>
             <thead className=' border-b-2 border-solid border-white mb-5'> 
                 <tr className=' *:text-xl *:text-left *:sm:p-[10px_0] *:p-[0_10px]'>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th></th>
                </tr>
             </thead>

             <tbody>
                {coins.map(coin=>(
                    <TabaleRow coin={coin} key={coin.id} />
                ))}
             </tbody>
       </table>

        }

    </div>
    </>
  )
}
export default TableCoin




const TabaleRow=({coin})=>{
    return(
        <>
        <tr className='h-20 border-b-1 border-solid border-[#22262e] font-semibold text-[1.1rem] *:sm:p-[0] *:p-[0_10px]'>
                        <td>
                            <div className='flex items-center cursor-pointer'>
                               <img src={coin.image} alt="coin image" className='size-6.5 mr-2.5'/>
                               <p className='text-[#9fa6b7] text-[1.2rem] font-semibold'>{coin.symbol.toUpperCase()}</p>
                            </div>
                        </td>

                        <td>
                            <p>{coin.name}</p>
                        </td>

                        <td>
                            <p>${coin.current_price.toLocaleString()}</p>
                        </td>

                        <td className={coin.price_change_percentage_24h > 0 ? "text-[#57bc7c]" : "text-[#d33636]"}>
                            <p> %{coin.price_change_percentage_24h.toFixed(2) }</p>
                        </td>

                        <td>
                            <p>{coin.total_volume.toLocaleString() } </p>
                        </td>

                        <td>                         
                            <img  src={coin.price_change_percentage_24h>0?ChartUp:ChartDown} alt="chart flow" className='min-w-[100px] min-h-[40px]' />
                        </td>
            </tr>
        </>
    )
}