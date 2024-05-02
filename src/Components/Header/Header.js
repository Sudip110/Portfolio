import React, { useEffect, useRef } from "react";
import profilePic from "../../Assets/DP.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { useNavigate } from "react-router-dom";
import useSidebarContext from "../../Context/SidebarContext";

function Header() {
    const {menuOpen, setMenuOpen} = useSidebarContext();
    const navigate = useNavigate();  
    const menuRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
          }
        }
    
        // Add event listener to detect clicks outside the menu button
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          // Remove event listener when component unmounts
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [setMenuOpen]);
    
    return (
        <div className=" top-0 lg:sticky lg:z-10">
            <nav role="navigation" className=""> 
               {/* Menu button on medium and smaller screens */}
                <button ref={menuRef} className={` z-20 lg:hidden  peer  relative transition delay-150 duration-300` } onClick={()=>setMenuOpen(true)}>
                   <MenuIcon/>
                </button>

                {/* Navigation bar/Sidebar */}
                <div className="z-30 text-gray-500 lg:p-2 lg:static fixed top-0 -left-96 lg:left-0 lg:h-12 h-screen w-1/2 lg:w-screen bg-white shadow-2xl lg:shadow-sm peer-focus:left-0 peer:transition ease-out delay-150 duration-500">
                   
                    <div className="flex lg:flex-row flex-col lg:items-center justify-center gap-4"> 
                        
                        {/* Profile section in the sidebar only visible on medium and smaller screens*/}
                        <div className="flex items-center gap-3 mb-4 mt-10 pt-4 pb-3 pl-2 pr-2 shadow-sm w-full lg:hidden">
                            <img src={profilePic}alt="Profile Pic" className="rounded-full object-contain h-16"/>
                            <div className=" font-Montserrat">
                             <h3 className=" text-base font-bold text-gray-800 ">Sudipto Mahapatra</h3>
                             <p className=" text-sm font-medium text-gray-600">Frontend Developer</p>
                            </div>
                        </div>
                        
                        {/* Home section */}
                        <div className="flex  cursor-pointer lg:h-fit h-12 lg:bg-transparent bg-whitesmoke shadow-md lg:shadow-none rounded-md lg:rounded-none gap-2 text-base items-center pl-2 lg:hover:text-violet-500">
                            <div  className="lg:hidden"><HomeOutlinedIcon /></div>
                            <button onClick={()=>{ 
                                console.log("home clicked")
                                navigate("/")
                                }} className="lg:focus:text-violet-500  font-medium">Home</button>
                        </div>

                        {/* About Section */}
                        <div className="flex cursor-pointer lg:h-fit h-12 lg:bg-ivory-white bg-whitesmoke  shadow-md lg:shadow-none rounded-md lg:rounded-none gap-2 text-base items-center pl-2 lg:hover:text-violet-500">
                            <div  className="lg:hidden  "><Person2OutlinedIcon/></div>
                            <button onClick={()=>navigate("/about")} className="lg:focus:text-violet-500  font-medium">About</button>
                        </div>

                        {/* Project Section */}
                        <div className="flex cursor-pointer lg:h-fit h-12  lg:bg-ivory-white bg-whitesmoke  shadow-md lg:shadow-none rounded-md lg:rounded-none gap-2 text-base items-center pl-2 lg:hover:text-violet-500" >
                             <div  className="lg:hidden "><AccountTreeOutlinedIcon/></div>
                            <button onClick={()=>navigate("/projects")} className="lg:focus:text-violet-500  font-medium">Projects</button></div>
                        </div>
                </div>

                <div className={`z-15 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 blur-lg opacity-0 peer-focus:opacity-100 transition duration-500 delay-100`}></div>
            </nav>
        </div>
    )
}
export default Header;