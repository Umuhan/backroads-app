/* eslint-disable */

import { socialLinks } from "./data";

const Sociallinks = ({ parentClass, itemClass }) => (
  <ul className={parentClass}>
    {socialLinks.map((item) => {
      const { id, href, icon } = item;
      return (
        <li key={id}>
          <a href={href} target="_blank" className={itemClass} rel="noreferrer">
            <i className={icon} />
          </a>
        </li>
      );
    })}
  </ul>
);
export default Sociallinks;
