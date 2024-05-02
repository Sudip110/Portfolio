import React, { useState } from 'react';


function Project({image,title,description,technologies,git,deploy}) {
    const [descDetailView,setDescDetailDetilView]= useState(false);
    //console.log(descDetailView)
  return (
    <div className=" bg-gradient-to-br from-purple1 to-purple2 h-fit w-72 rounded-lg shadow-2xl transition-all delay-75 duration-100">
        <img className="object-fill rounded-t-lg" src={image} alt="Project" />
        <div className="p-1">
            <div className="text-gray-200 p-2 transition-all delay-75 duration-100">
                <h2 className='font-Sans text-lg text-left m-1 font-semibold'>{title}</h2>
                <p onClick={()=>{setDescDetailDetilView(!descDetailView)}} className={`text-sm font-Sans font-medium text-left m-1 ${descDetailView?'':'truncate'} cursor-pointer`}>{description} </p>
            </div>
            <div className='w-fit  h-fit p-2 m-2 flex items-center gap-2'>

                {
                technologies.map((tech,index)=>
                (<div key={index} className='bg-ivory-white h-5 w-fit p-1 flex items-center justify-center rounded-sm shadow-lg'>
                    <span className="text-sm font-Sans text-gray-600 font-medium ">{tech}</span>
                </div>))
                }
            </div>
            
            <div className='w-36 h-8 p-1 flex justify-center items-center gap-2 mb-8'>
                <div className=" cursor-pointer bg-gray-300 rounded-md shadow-lg lg:hover:shadow-xl p-1.5 text-xs text-gray-800 lg:hover:h-8 lg:hover:w-16 transition-all  font-Sans font-medium delay-75 duration-75"><a href={deploy}>Try It Out</a></div>
                <div className=" cursor-pointer bg-gray-300 rounded-md shadow-lg lg:hover:shadow-xl p-1.5 text-xs text-gray-800 lg:hover:h-8 lg:hover:w-16 transition-all  font-Sans font-medium delay-75 duration-75"><a href={git}>Get Code</a></div>
            </div>
        </div>
    </div>
  )
}

export default Project