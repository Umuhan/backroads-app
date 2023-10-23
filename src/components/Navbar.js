import logo from '../images/logo.svg';
import Datalinks from './Datalinks';
import Sociallinks from './Sociallinks';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars" />
        </button>
      </div>
      <Datalinks parentClass="nav-links" itemClass="nav-link" />
      <Sociallinks parentClass="nav-icons" itemClass="nav-icon" />
    </div>
  </nav>
);
export default Navbar;
