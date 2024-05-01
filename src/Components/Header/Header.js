import React, { useState } from "react";
import profilePic from "../../Assets/DP.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClickMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div class=" top-0 ">
            <nav role="navigation" class=""> 
               {/* Menu button on medium and smaller screens */}
                <button class={` z-20 lg:hidden  peer  relative transition delay-150 duration-300` } onClick={handleClickMenu}>
                   <MenuIcon/>
                </button>

                {/* Navigation bar/Sidebar */}
                <div class="z-30 text-gray-500 lg:p-2 lg:static fixed top-0 -left-96 lg:left-0 lg:h-12 h-screen w-1/4 lg:w-screen bg-ivory-white shadow-2xl lg:shadow-sm peer-focus:left-0 peer:transition ease-out delay-150 duration-500">
                   
                    <div class="flex lg:flex-row flex-col lg:items-center justify-center gap-4"> 
                        
                        {/* Profile section in the sidebar only visible on medium and smaller screens*/}
                        <div class="flex items-center gap-3 mb-4 mt-10 pt-4 pb-3 pl-2 pr-2 shadow-sm w-full lg:hidden">
                            <img src={profilePic}alt="Profile Pic" class="rounded-full object-contain h-16"/>
                            <div class=" font-Montserrat">
                             <h3 class=" text-base font-bold text-gray-800 ">Sudipto Mahapatra</h3>
                             <p class=" text-sm font-medium text-gray-600">Frontend Developer</p>
                            </div>
                        </div>
                        
                        {/* Home section */}
                        <div class="flex  cursor-pointer lg:h-fit h-12 lg:bg-ivory-white bg-whitesmoke shadow-md lg:shadow-none rounded-md lg:rounded-none gap-2 text-base items-center pl-2 lg:hover:text-violet-500">
                            <div  class="lg:hidden"><HomeOutlinedIcon /></div>
                            <button class="lg:focus:text-violet-500  font-medium">Home</button>
                        </div>

                        {/* About Section */}
                        <div class="flex cursor-pointer lg:h-fit h-12 lg:bg-ivory-white bg-whitesmoke  shadow-md lg:shadow-none rounded-md lg:rounded-none gap-2 text-base items-center pl-2 lg:hover:text-violet-500">
                            <div  class="lg:hidden  "><Person2OutlinedIcon/></div>
                            <button class="lg:focus:text-violet-500  font-medium">About</button>
                        </div>

                        {/* Project Section */}
                        <div class="flex cursor-pointer lg:h-fit h-12  lg:bg-ivory-white bg-whitesmoke  shadow-md lg:shadow-none rounded-md lg:rounded-none gap-2 text-base items-center pl-2 lg:hover:text-violet-500" >
                             <div  class="lg:hidden "><AccountTreeOutlinedIcon/></div>
                            <button class="lg:focus:text-violet-500  font-medium">Projects</button></div>
                        </div>
                </div>

                <div class={`z-15 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 blur-lg opacity-0 peer-focus:opacity-100 transition duration-500 delay-100`}></div>
            </nav>
        </div>
    )
}
export default Header;