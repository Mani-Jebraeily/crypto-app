import {React,useEffect, useState} from 'react'

import TableCoin from '../modules/TableCoin'
import Pagination from '../modules/Pagination'

import { getCoinList } from '../../services/cryptoApi'
import Search from '../modules/Search'

function HomePage() {

    const [coins,setCoins]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [currency,setCurrency]=useState("usd")


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
        <Search setCurrency={setCurrency}/>
        <TableCoin coins={coins} currency={currency} isLoading={isLoading}/>
        <Pagination page={page} setPage={setPage}/>
    </>
  )
}

export default HomePage