import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
      <div>
        <NavLink to="/news">News</NavLink>
      </div>
      <div>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
