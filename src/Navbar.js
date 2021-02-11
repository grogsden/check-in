import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Check-in Breakdown Podcast</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
    </nav>
   );
}
 
export default Navbar;