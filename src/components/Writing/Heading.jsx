const Heading = ({ text }) => {
  return (
    <h1 className="text-8xl font-bold text-secondary">
      {text}
      <span className="text-primary">.</span>
    </h1>
  );
};

export default Heading;
