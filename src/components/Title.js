const Title = (item) => {
  const { title, subTitle } = item;
  return (
    <div className="section-title">
      <h2>
        {title}
        {' '}
        <span>{subTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
