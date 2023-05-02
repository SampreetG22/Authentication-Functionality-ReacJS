import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="mainContainer">
    <Link className="links" to="/">
      <li className="listItem">Home</li>
    </Link>
    <Link className="links" to="/about">
      <li className="listItem">About</li>
    </Link>
  </nav>
)
export default Header
