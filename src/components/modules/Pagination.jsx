import React, { useState } from 'react'

function Pagination({page,setPage}) {

    const previousHandeler=()=>{
        if(page<=1)return
        setPage(page=>page-1)     
    }

    const nextHandeler=()=>{
        if(page>=10)return
        setPage(page=>page+1)
    }
  return (
    <>
    <div className='w-100 flex justify-between items-center m-auto mb-25'>
        <button className={page===1?' disabled cursor-not-allowed opacity-[0.3] w-20 bg-[#3874ff] text-[#fff] p-[5px_10px] rounded-sm text-[1rem] ':"w-20 bg-[#3874ff] text-[#fff] p-[5px_10px] rounded-sm text-[1rem] cursor-pointer "} onClick={previousHandeler}>previous</button>
        <p onClick={()=>setPage(1)} className={page===1?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer":"w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer"}>1</p>
        <p onClick={()=>setPage(2)} className={page===2?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer":"w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer"}>2</p>
        {page>2&&page<9&&(
            <>
            <span>...</span>
            <p className='bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm'>{page}</p>
            </>
        )}
        <p>...</p>
        <p onClick={()=>setPage(9)} className={page===9?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer":"w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer"}>9</p>
        <p onClick={()=>setPage(10)} className={page===10?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer":"text-w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm cursor-pointer"}>10</p>
        <button className={page===10?'disabled cursor-not-allowed opacity-[0.3] w-20 bg-[#3874ff] text-[#fff] p-[5px_10px] rounded-sm text-[1rem] ':"w-20 bg-[#3874ff] text-[#fff] p-[5px_10px] rounded-sm text-[1rem] cursor-pointer "} onClick={nextHandeler}>next</button>
    </div>
    </>
  )
}

export default Pagination
