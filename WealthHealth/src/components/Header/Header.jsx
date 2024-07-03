import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/add-employees" className="nav-link">Create Employee</Link>
          </li>
          <li className="nav-item">
            <Link to="/view-employees" className="nav-link">View Employee</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;