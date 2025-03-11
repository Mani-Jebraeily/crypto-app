import React from 'react'
function Layout({children}) {
  return (
    <>
    <header className='w-[100%]  m-auto p-5 flex items-center text-center justify-between bg- [#3874ff] bg-[#303030]  p -[10px_20px] mb-37.5 rounded-xl'>
        <h1 className='text-3xl'>Crypto App</h1>
        <p>
            <a href="https://github.com/Mani-Jebraeily" className='text-[#6552f4] text-[1.3rem] font-semibold pr-1 cursor-pointer '>Mani Jebraeily</a>
             | React.js
        </p>
    </header>
    {children}
    <footer className='w-[100%] m-auto text-center bg-[#303030] p-5 rounded-xl'>
        <p>Development by Mani With ❤️</p>
    </footer>
    
    </>
  )
}

export default Layout