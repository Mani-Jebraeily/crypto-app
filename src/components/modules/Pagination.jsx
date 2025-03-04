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
        <p className={page===1?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm":"w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm"}>1</p>
        <p className={page===2?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm":"w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm"}>2</p>
        {page>2&&page<9&&(
            <>
            <span>...</span>
            <p className='bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm'>{page}</p>
            </>
        )}
        <p>...</p>
        <p className={page===9?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm":"w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm"}>9</p>
        <p className={page===10?"bg-[#3874ff] w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm":"text-w-6 inline-block border-1 border-solid border-[#3874ff] text-center rounded-sm"}>10</p>
        <button className={page===10?'disabled cursor-not-allowed opacity-[0.3] w-20 bg-[#3874ff] text-[#fff] p-[5px_10px] rounded-sm text-[1rem] ':"w-20 bg-[#3874ff] text-[#fff] p-[5px_10px] rounded-sm text-[1rem] cursor-pointer "} onClick={nextHandeler}>next</button>
    </div>
    </>
  )
}

export default Pagination
