import React from 'react'
import netflixCloneImg from '../../Assets/Netflix-clone.jpg'
import gmailCloneImg from '../../Assets/Gmail-clone.jpg'
import pmCloneImg from '../../Assets/Manager.jpg'
import Project from "../project/Project"
function Projects() {
    const projects =[
        {
            id:1,
            title:'Netflix Clone',
            image:netflixCloneImg,
            description:"A UI clone of Netflix, mirrors layout of the popular streaming platform, design, and functionality, offering users a familiar experience with diverse content.",
            technologies:["React","CSS"],
            deploy:"netflix-clone-2dab7.firebaseapp.com",
            git:"https://github.com/Sudip110/Netflix-clone",

        },
        {
            id:2,
            title:'Gmail Clone',
            image:gmailCloneImg,
            description:"A Gmail UI clone, mimics popular mailing service's interface, enabling sign-in, compose, send, and inbox features, delivering a familiar email management experience.",
            technologies:["React","Redux","CSS"],
            deploy:"https://lnkd.in/gg4HexTW",
            git:"gmail-clone-iz5pp8nvg-sudipto-mahapatras-projects.vercel.app",

        },
        {
            id:3,
            title:'Project Management App',
            image:pmCloneImg,
            description:"A project management app that allows creating projects, tasks, and tracking task completion status, enabling efficient project organization and progress monitoring.",
            technologies:["HTML","CSS","Vanilla Js"],
            deploy:"https://manager-e2535f.netlify.app",
            git:"https://github.com/Sudip110/Project-Management-Application",

        }
    ]
  return (
    <div class=" lg:z-0  bg-whitesmoke w-screen mb-0">
        <div class=" lg:pt-6 lg:text-center mb-2 text-left ml-3 pt-10 pl-3">
            <h3 class="font-Sans font-medium text-gray-400 text-lg">Explore my portfolio of projects, showcasing my expertise in the popular web technologies.</h3>
            <p class="font-Sans font-medium text-gray-400 text-lg">Feel free to try out the apps and check out the source code.</p>
        </div>
    <div class="flex lg:flex-row flex-col gap-24 justify-center items-center p-12 m-5">
        {
        projects.map((project)=>(
        <Project key={project.id} image={project.image} title={project.title} description={project.description}
        technologies={project.technologies} deploy={project.deploy} git={project.git}/>))
        }
    </div>
    </div>
  )
}

export default Projects