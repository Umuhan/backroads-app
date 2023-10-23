/* eslint-disable */
import { dataLinks } from "./data";

const Datalinks = ({ parentClass, itemClass }) => (
  <ul className={parentClass}>
    {dataLinks.map((item) => {
      const { id, href, text } = item;
      return (
        <li key={id}>
          <a href={href} className={itemClass}>
            {text}
          </a>
        </li>
      );
    })}
  </ul>
);
export default Datalinks;
