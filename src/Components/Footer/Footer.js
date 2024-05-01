import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <div class="bottom-0 bg-ivory-white mt-0 flex flex-col items-center justify-center ">
        {/* above line */}
        <div class="border-b-2 border-gray-600 flex lg:flex-row flex-col items-center lg:justify-between pb-6 w-screen ">
            <div class="text-left lg:mb-0 mb-5 flex flex-col  lg:items-start lg:pl-8  md:w-80 lg:w-fit w-64 ">
                <h2 class=" text-lg font-Sans font-semibold text-gray-600">I'll help you build beautiful apps </h2>
                <h2 class=" text-lg font-Sans font-semibold text-gray-600">that your users will like..</h2>
                <p class="text-base font-Sans font-medium text-gray-600 mt-2">FRONTEND DEVELOPER | BANGALORE, INDIA</p>
            </div>
            <div class="text-left font-Sans font-medium  lg:pr-12 md:w-80 lg:w-fit w-64">
                <h2 class="text-gray-600">Email Me</h2>
                <div class="text-gray-600 "><EmailIcon/><span class="ml-1">sudiptomahapatra91@gmail.com</span></div>
            </div>
        </div>
        
        {/* below line */}
        
          <div class=" text-gray-600 flex lg:items-end lg: justify-end items-center gap-4 pr-5 pt-2 mr-5 mb-5 w-screen">
            <a href="https://www.linkedin.com/in/sudipto-mahapatra-19bb23233/"><LinkedInIcon/></a>
            <a href="https://github.com/Sudip110/"><GitHubIcon/></a>
          </div>
    </div>
  )
}

export default Footer