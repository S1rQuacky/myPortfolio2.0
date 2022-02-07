import '../styles/header.scss'

function Header(props) {
  return (
      <header className='header'>
          <h1 className="title"> Neide Urbina </h1>
          <div className="pageLink" dest="home"> <a href="#home"> Home </a></div>
          <div className="pageLink" dest="about"> <a href="#about">About </a></div>
          <div className="pageLink" dest="projects"> <a href="#projects"> Projects </a></div>
      </header>
  )
}

export default Header;






