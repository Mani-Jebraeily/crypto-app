import React, { use, useEffect, useState } from 'react'
import { getChart } from '../../services/cryptoApi'
import { convertData } from '../../helpers/convertData'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Chart({chart,setChart}) {
    const [type,setType]=useState("prices")
    //  convertData(chart,type)

  return (
    <div className='size-[100%] fixed top-0 left-0 opacity-[3px] backdrop-filter-[blur(3px)]'> 
       <span onClick={()=>setChart(false)} className='inline-block bg-[#d33636] text-[#fff] size-7.5 leading-7.5 text-center m-[30px_0_0_30px] rounded-sm  text-[1.5rem] font-bold cursor-pointer'>X</span>
       <div className='w-[800px] bg-[#18181ce6] m-auto p-5 mt-12.5 border-2 border-[#404042]  rounded-[20px]'>
        <div  className='flex items-center mb-3'>
            <img src={chart.coin.image} alt={chart.coin.name} className='w-10 h-10 mr-5 ' />
            <p className='text-[1.5rem] font-bold'>{chart.coin.name}</p>
        </div>
        {/* name  */}
        <div className='w-[760px] h-[300px]'>
            {/* grap */}
            <ChartComponent data={convertData(chart,type)} type={type}/>
        </div>

        <div className='mt-8  '>
            <button onClick={()=>setType("prices")} className={type==="prices"?`m-[10px_20px]  bg-[#3874ff] border-1 border-[#3874ff] text-[#fff] text-[1rem] p-[5px_10px] rounded-sm cursor-pointer`:`m-[10px_20px]  bg-[#18181cdb] border-1 border-[#3874ff] text-[#3874ff] text-[1rem] p-[5px_10px] rounded-sm cursor-pointer`}>Prices</button>
            {/* <button className='bg-[#3874ff]'> selected</button> */}
            <button onClick={()=>setType("market_caps")} className={type==="market_caps"?`m-[10px_20px]  bg-[#3874ff] border-1 border-[#3874ff] text-[#fff] text-[1rem] p-[5px_10px] rounded-sm cursor-pointer`:`m-[10px_20px]  bg-[#18181cdb] border-1 border-[#3874ff] text-[#3874ff] text-[1rem] p-[5px_10px] rounded-sm cursor-pointer`}>Market Caps</button>
            <button onClick={()=>setType("total_volumes")} className={type==="total_volumes"?`m-[10px_20px]  bg-[#3874ff] border-1 border-[#3874ff] text-[#fff] text-[1rem] p-[5px_10px] rounded-sm cursor-pointer`:`m-[10px_20px]  bg-[#18181cdb] border-1 border-[#3874ff] text-[#3874ff] text-[1rem] p-[5px_10px] rounded-sm cursor-pointer`}>Total Volumes</button>
        </div>

        <div className='flex justify-between m-[30px_20px_0px] *:flex *:text-[1.1rem]'>
            <div>
                <p className='mr-2 text-[#3874ff]'>Prices:</p>
                <span> ${chart.coin.current_price.toLocaleString()}</span>
            </div>

            <div>
                <p className='mr-2 text-[#3874ff]'>ATH:</p>
                <span> ${chart.coin.ath.toLocaleString()}</span>
            </div>

            <div>
                <p className='mr-2 text-[#3874ff]'>Market Cap:</p>
                <span> ${chart.coin.market_cap.toLocaleString()}</span>
            </div>

   
        </div>
          
      </div>
    </div>
  )
}

export default Chart

const ChartComponent=({data,type})=>{
    return(
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey={type} stroke='#3874ff' strokeWidth="2px"/>
            <CartesianGrid stroke='#404042'/>
            <YAxis dataKey={type} domain={["auto","auto"]}/>
            <XAxis hide/>
            <Legend />
            <Tooltip/>
        </LineChart>

    </ResponsiveContainer>
    )
}