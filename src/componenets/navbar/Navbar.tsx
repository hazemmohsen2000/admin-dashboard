import { Link } from "react-router-dom"
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="website logo" />
        <span>HazemAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        
        <div className="user">
          <Link to = "profile">
          <img src="/hazem.PNG" alt="" />
          </Link>
          <span>hazem</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />

      </div>

    </div>
  )
}
export default Navbar