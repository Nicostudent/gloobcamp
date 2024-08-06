const Heading = ({ text, addClass }) => {
  return (
    <h1
      className={`text-5xl md:text-8xl font-bold text-secondary my-2 ${addClass}`}
    >
      {text}
      <span className="text-primary">.</span>
    </h1>
  );
};

export default Heading;
