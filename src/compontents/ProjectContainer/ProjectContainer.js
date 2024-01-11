import React from 'react'
import { Element } from 'react-scroll';
import Projects from '../Projects/Projects';
import './ProjectContainer.css'
import imgone from '../../image/social-app.PNG'
import imgtwo from '../../image/fire-pizza.PNG'

const ProjectContainer = () => {

    const projects = [
        {
            img : `${imgtwo}`,
            title : "Fire Pizza Store",
            desc : "Welcome to our app, Enjoy your food  time",
            link : "https://phenomenal-trifle-f84dfd.netlify.app/"
        },
        {
            img :`${imgone}`,
            title : "Social Posts Web App",
            desc : "Welcome to our app, let to your best in our website",
            link : "https://social-posts-website.netlify.app/"
        },
        {
            img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKQZyQQ698LKS2V5niAusFpPkHoxe2Dh66jJa29POQ1qTnn9X3bPuZHQq_FMeLtH2wjGhCwWWOkGVgUMpaPNzrF7_A0v9S_0vlkCwfNw7nnoNIh-oJwFtYLWqufShSbtqkajwltpUV-a3dC7CRQzzbeYg1MDMviQcG7KiZcVQJ_EzTuFQxMe1IhX5EtA/s3840/CITYSCAPE1142023.png",
            title : "FaceBook",
            desc : "Welcome to our app, let to your best in our website",
            link : "www.google.com"
        },
        /* {
            img : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKQZyQQ698LKS2V5niAusFpPkHoxe2Dh66jJa29POQ1qTnn9X3bPuZHQq_FMeLtH2wjGhCwWWOkGVgUMpaPNzrF7_A0v9S_0vlkCwfNw7nnoNIh-oJwFtYLWqufShSbtqkajwltpUV-a3dC7CRQzzbeYg1MDMviQcG7KiZcVQJ_EzTuFQxMe1IhX5EtA/s3840/CITYSCAPE1142023.png",
            title : "FaceBook",
            desc : "Welcome to our app, let to your best in our website",
            link : "www.google.com"
        }, */
    ]

  return (
    <Element className='projectContainer' name='projects'>
        <h1>Projects</h1>
        <p>
            Here are some projects which I done for making lives of people easy
        </p>
        <div className="projectContainer__projects">
            {projects.map((project,index) => {
                return (
                    <Projects key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                )
            })}
        </div>
    </Element>
  )
}

export default ProjectContainer