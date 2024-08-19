import React from 'react'

function navbar() {
  return (
    <>
    <div className='bn  '>
        <div className='navabr  backdrop-blur-sm bg-white/30 relative  cursor-pointer'>
    <div className='flex  space-x-5  p-4 justify-around  text-white  font-sans'>
        <h1 className='text-xl font-semibold  	'>
            Arun Ahirwar
        </h1>
        <ul className='flex space-x-10 mr-44 font-sans'>
            <li>Serive</li>
            <li>Projects</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>
        <ul><li>Work Request</li></ul>
       </div></div>
     
        <div className='dp'><h1>React / Front-End Developer</h1></div>
        <div className='a'> <a className='work'>Let's work!</a> </div>
    </div>
    
   
  
    </>
  )
}

export default navbar
