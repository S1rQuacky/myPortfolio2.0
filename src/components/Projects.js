import React from 'react';
import '../styles/projects.scss'

function Projects() {
  return <div className='b-container'>
      
    <h1 >Projects</h1>
    <div className='c-container'>
        <div className="project1"> 
            <a href="https://the-finising-touch.netlify.app/"> The Finishing Touch </a>
            <img src='/img/theFinishing.jpeg' alt='FinishingTouch'/>
            <p>This project was a team collaboration. I worked on the Google Authentication piece and was Project Manager and Product Owner.
               The application uses a Heroku makeup API, in this application you can search for different makup by Type or by Brand. These 
               products are linked to sites where the product could be purchased but before you leave our site, you can add the products you
               would like into your cart and the cart will show you a possible total cost for the products you add.<br/>
               <br/>
               
               Node.js | dotenv | cors | mongoose | morgan | react | react-dom | react-google-login | sass
            </p>
        </div>
        <div className='project2'>
            <a href='https://purrfect-getaway.netlify.app/'>Purrfect Getaway</a>
            <img src='/img/thePurrfect.jpeg' alt='ThePurrfect'/>
            <p>This project was created with the well being of kitties in mind. I am a cat lover and you rarely find boarding locations for cats only. 
                With this app, you can become a host to a kitty, in this app you can post information of your location and accomodations and add images. 
                A user can become a host by posting their location for kitty boarding.<br/>
            <br/>
               Node.js | react | react-dom | react-router-dom | sass | rack-cors | PostgreSQL | Ruby on Rails | 
            </p>
        </div>
        <div className='project3'>
            <a href='https://your-purrfect-getaway.netlify.app/'>Your Purrfect Getaway</a>
            <img src='/img/yourPurrfect.jpeg' alt='YourPurrfect'/>
            <p>This app is a 2.0 to Purrfect Getaway. This app was created using Express for backend, Heroku, NextJS and Next-Auth. In this design you can sign up to
                be a Host or a Customer. If you choose Host, you will see a different home page and available options. As a customer you can view different locations 
                to board your kitty. 
            </p>
        </div>
        </div>    
        
    </div>

      

}

export default Projects

