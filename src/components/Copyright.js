const Copyright = (item) => {
  const { title, subtitle } = item;
  return (
    <p className="copyright">
      {title}
      <span id="date">{new Date().getUTCFullYear()}</span>
      {' '}
      {subtitle}
    </p>
  );
};
export default Copyright;
