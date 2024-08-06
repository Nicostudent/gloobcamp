const Heading = ({ children, addClass }) => {
  return (
    <h1 className={`text-5xl md:text-8xl font-bold text-secondary ${addClass}`}>
      {children}
      <span className="text-primary">.</span>
    </h1>
  );
};

export default Heading;
