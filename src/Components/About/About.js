import React from 'react'
import workInProgImg from "../../Assets/workInProg.jpg"

function About() {
  return (
    <div className='bg-white w-screen h-3/4'>
    <div className="relative lg:z-0 -z-10 h-1/4 w-64 bg-gradient-to-br from-purple1 to-purple2 rounded-md mt-5 mb-20 mr-52 ml-52 shadow-2xl">
        <img className=" object-fill h-56 rounded-t-md"src={workInProgImg} alt="" />

        <div className=" text-lg font-Montserrat font-semibold text-gray-300 p-5"> 
            <h2>Development is ongoing.</h2>
            <h2>This section will be available soon!!</h2>
            <h2>Contact details are mentioned below!!</h2>
        </div>
    </div>
    </div>
  )
}

export default About