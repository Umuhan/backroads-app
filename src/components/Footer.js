import Sociallinks from './Sociallinks';
import Copyright from './Copyright';
import Datalinks from './Datalinks';

const Footer = () => (
  <footer className="section footer">
    <Datalinks parentClass="footer-links" itemClass="footer-link" />
    <Sociallinks parentClass="footer-icons" itemClass="footer-icon" />
    {/* <ul className="footer-icons">
        {socialLinks.map((item) => {
          const { id, href, icon } = item;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul> */}

    <Copyright
      title="copyright &copy; Backroads travel tours company"
      subtitle="all rights reserved"
    />
  </footer>
);
export default Footer;
