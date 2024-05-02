import React from 'react'
import profilePic from '../../Assets/DP.png'
import { useNavigate } from 'react-router-dom';
import useSidebarContext from '../../Context/SidebarContext';
function Home() {
    const navigate = useNavigate();
    const {menuOpen}=useSidebarContext();
  return (

    <div className={`relative ${menuOpen?'-z-10':'z-0'} lg:z-0 flex  lg:flex-row flex-col-reverse lg:mt-24 lg:items-start items-center justify-center bg-white lg:mb-16`}>
        <div className=" lg:left-12 lg:top-24 md:bottom-44 bottom-24  p-10 pb-4 m-5 text-left lg:p-5 lg:ml-12 ml-10 md:ml-24 g:pl-10 lg:h-80  md:h-96">
            <h2 className=" text-gray-800 text-lg mb-6 font-medium font-Sans">Hey I'm Sudipto Mahapatra</h2>
            <h1 className=" text-violet-600 text-3xl font-extrabold font-Montserrat">Front<span className="text-3xl font-extrabold text-gray-800  font-Montserrat">end</span></h1>
            <h1 className=" text-gray-800 text-3xl font-extrabold font-Montserrat">Developer</h1>
            <h3 className=" text-gray-800 text-lg font-medium mt-4 font-Sans">I am a frontend developer bsed in Bangalore, India.</h3>
            <h3 className=" text-gray-800 text-lg font-medium font-Sans">I love building visually appealing and immersive webapps.</h3>
            <div className="flex gap-4 mt-6  w-full md:mt-10">
                <button onClick={()=>navigate("/about")} className=" bg-gray-800 w-24 lg:hover:w-28 h-8 lg:hover:h-9   rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all  delay-75 duration-75">
                    <span className="text-ivory-white text-xs font-semibold  font-Sans">
                        Get In Touch
                    </span>
                </button>
                <button onClick={()=>navigate("/projects")} className="  bg-whitesmoke w-24 lg:hover:w-28 h-8 lg:hover:h-9 rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all delay-75 duration-75">
                    <span className="text-gray-800 text-xs font-semibold  transition-all  font-Sans">
                        Browse Projects
                    </span>
                </button>
            </div>
        </div>
        <div className="z-0 lg:right-12 lg:top-24 top-16  md:top-20 lg:h-80 md:h-72 lg:mr-12 lg:mb-0 mb-5 lg:pr-10 lg:pb-5 ">
            <div className="  border-gray-200  p-4 border-2 rounded-full">
               <div className=" rounded-full p-2 bg-gray-300">
                 <img className="z-0 object-fit lg:h-80  lg:w-80 md:h-72 md:w-72 h-64 w-64 rounded-full object-center" src={profilePic} alt="" />
               </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Home