import React from 'react';

function Projects() {
  return <div>
      
    <h1 >Projects</h1>
        <div className="project1"> 
            <a href="https://the-finising-touch.netlify.app/"> The Finishing Touch </a>
            <p>This project was a team collaboration. I worked on the Google Auth piece and was Project Manager and Product Owner</p>
        </div>
        <div className='project2'>
            <a href='https://purrfect-getaway.netlify.app/'>Purrfect Getaway</a>
            <p>Project was created using Ruby on Rails backend with React frontend. A user can become a host by posting their location for kitty boarding. </p>
        </div>
        <div className='project3'>
            <a href='https://your-purrfect-getaway.netlify.app/'>Your Purrfect Getaway</a>
            <p>This app is a 2.0 to Purrfect Getaway. This app was created using Express for backend, Heroku, NextJS and Next-Auth. In this design you can sign up to
                be a Host or a Customer. If you choose Host, you will see a different home page and available options. As a customer you can view different locations 
                to board your kitty. 
            </p>
        </div>
        
    </div>

      

}

export default Projects

