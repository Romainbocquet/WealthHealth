import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/add-employees">Create Employee</Link>
          </li>
          <li>
            <Link to="/view-employees">view Employee</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
