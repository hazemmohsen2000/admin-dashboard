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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsW-qK0rQcWNv6iv95_4FLuVML1V4IM-51g&s" alt="" />
          </Link>
          <span>hazem</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />

      </div>

    </div>
  )
}
export default Navbar