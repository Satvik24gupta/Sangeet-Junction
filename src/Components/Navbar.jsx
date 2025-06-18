import React from 'react'

const Navbar = () => {
  return (
    <>
        {/* <div className='' style={{position:'sticky', width:'100vw', margin:'0px 0px 50px 0px'}}> */}
        <div className='z-10' style={{position:'sticky', top:'0px', left:'0px'}}>
            <ul className='flex justify-evenly bg-black text-white p-4'>
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Contact us</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar