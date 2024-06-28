import { Link } from "react-router-dom"
import "./menu.scss"
const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="ListItem">
          <img src="/home.svg" alt="home icon" />
          <span className="ListItemTitle">Home</span>
        </Link>
        <Link to="profile" className="ListItem">
          <img src="/profile.svg" alt="profile icon" />
          <span className="ListItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="ListItem">
          <img src="/home.svg" alt="home icon" />
          <span className="ListItemTitle">Home</span>
        </Link>
        <Link to="profile" className="ListItem">
          <img src="/profile.svg" alt="profile icon" />
          <span className="ListItemTitle">Profile</span>
        </Link>
      </div>
     
    </div>

  )
}
export default Menu