import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Games</Link>
        <Link to="/team">Team</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
