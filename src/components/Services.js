import Title from './Title';
import ServicesInfo from './ServicesInfo';

const Services = () => (
  <section className="section services" id="services">
    <Title title="our" subTitle="services" />
    <ServicesInfo />

    {/* <div className="section-center services-center">
        {services.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div> */}
  </section>
);
export default Services;
