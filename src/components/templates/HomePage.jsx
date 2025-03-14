import {React,useEffect, useState} from 'react'

import TableCoin from '../modules/TableCoin'
import Pagination from '../modules/Pagination'
import Search from '../modules/Search'

import { getCoinList } from '../../services/cryptoApi'
import Chart from '../modules/Chart'

function HomePage() {

    const [coins,setCoins]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [currency,setCurrency]=useState("usd")
    const [chart,setChart]=useState(false)
    const [symbol,setSymbol]=useState("$")
       
    useEffect(()=>{
        if(currency==="usd"){
            setSymbol("$")
        }else if(currency==="eur"){
            setSymbol("€")
        }else{setSymbol("¥")}    
    },[currency])
    

    useEffect(()=>{
        setIsLoading(true)
        const getData= async()=>{
          try {
            const res= await fetch(getCoinList(page,currency))
            const json=await res.json()
            setCoins(json)
            setIsLoading(false)    
          } catch (error) {
            console.log(error)
            
          }
   
        }
        getData()     
      },[page,currency])



  return (
    <>
        <Search setCurrency={setCurrency} setChart={setChart} currency={currency}  />
        <TableCoin coins={coins} currency={currency} isLoading={isLoading}  setChart={setChart} symbol={symbol} />
        <Pagination page={page} setPage={setPage}/>
        {!!chart && <Chart chart={chart} setChart={setChart} currency={currency} symbol={symbol}/>}
    </>
  )
}

export default HomePage