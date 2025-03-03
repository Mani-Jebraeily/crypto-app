import {React,useEffect, useState} from 'react'
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/cryptoApi'

function HomePage() {

    const [coins,setCoins]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const getData= async()=>{
            const res= await fetch(getCoinList())
            const json=await res.json()
            setCoins(json)
            setIsLoading(false)
        }
        getData()     
      },[])

  return (
    <>
    
        <TableCoin coins={coins} isLoading={isLoading}/>
    

    </>
  )
}

export default HomePage