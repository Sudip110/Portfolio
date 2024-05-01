import React from 'react'
import profilePic from '../../Assets/DP.png'
function Home() {
  return (
    <div class=" -z-10 relative md:h-screen flex  lg:flex-row flex-col lg:mt-24 lg:items-start items-center justify-center bg-ivory-white">
        <div class=" fixed z-0 lg:left-12 lg:top-24 md:bottom-64 bottom-24 md:p-5 p-10  m-5 text-left lg:p-5 lg:ml-12 ml-10 lg:pl-10 lg:h-80  md:h-96">
            <h2 class=" text-gray-800 text-lg mb-6 font-medium font-Sans">Hey I'm Sudipto Mahapatra</h2>
            <h1 class=" text-violet-600 text-3xl font-extrabold font-Montserrat">Front<span class="text-3xl font-extrabold text-gray-800  font-Montserrat">end</span></h1>
            <h1 class=" text-gray-800 text-3xl font-extrabold font-Montserrat">Developer</h1>
            <h3 class=" text-gray-800 text-lg font-medium mt-4 font-Sans">I am a frontend developer bsed in Bangalore, India.</h3>
            <h3 class=" text-gray-800 text-lg font-medium font-Sans">I love building visually appealing and immersive webapps.</h3>
            <div class="flex gap-4 mt-6  w-full md:mt-10">
                <button class=" bg-gray-800 w-24 lg:hover:w-28 h-8 lg:hover:h-9   rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all  delay-75 duration-75">
                    <span class="text-ivory-white text-xs font-semibold  font-Sans">
                        Get In Touch
                    </span>
                </button>
                <button class="  bg-whitesmoke w-24 lg:hover:w-28 h-8 lg:hover:h-9 rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all delay-75 duration-75">
                    <span class="text-gray-800 text-xs font-semibold  transition-all  font-Sans">
                        Browse Projects
                    </span>
                </button>
            </div>
        </div>
        <div class="fixed z-0 lg:right-12 lg:top-24 top-16  md:top-20 lg:h-80 md:h-72 lg:mr-12 lg:pr-10 lg:pb-5 ">
            <div class="  border-gray-200  p-4 border-2 rounded-full">
               <div class=" rounded-full p-2 bg-gray-300">
                 <img class="z-0 object-fit lg:h-80  lg:w-80 md:h-72 md:w-72 h-64 w-64 rounded-full object-center" src={profilePic} alt="" />
               </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Home