import React from 'react';
import '../styles/home.scss';


function Home() {
  return (
  <div className='body'>
      <div className='super'>
        <img src='/img/superNani.jpeg' alt=''></img>
      </div>  
      <div className='name'>
        <h2>Hello! </h2>
        <h1 >I'm Neide Urbina</h1>
      </div> 
      <div className='myTitle'>
        <h2 >a Software Engineer</h2>
      </div>
      <div className='linkedIn'>
        <a href='https://www.linkedin.com/in/neide-urbina/'><img src='/img/linkedin icon.png'/></a>
      </div>
      <div className='gitHub'>
        <a href='https://github.com/S1rQuacky'><img src='/img/gitrainbow.jpeg'/></a>
      </div>
      <div className='resume'>
        <a href='Neide.Urbina.SE.docx.pdf' download='Neide.Urbina.SE.docx.pdf'><button>Download Resumé</button></a>
      </div>
  </div>
      

  
  )
}

export default Home;
