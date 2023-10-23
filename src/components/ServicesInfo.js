import { services } from './data';

const ServicesInfo = () => (
  <div className="section-center services-center">
    {services.map((item) => {
      const {
        id, icon, title, text,
      } = item;
      return (
        <article className="service" key={id}>
          <span className="service-icon">
            <i className={icon} />
          </span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">{text}</p>
          </div>
        </article>
      );
    })}
  </div>
);
export default ServicesInfo;
