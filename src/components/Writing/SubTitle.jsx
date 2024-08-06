const SubTitle = ({ text, addClass }) => {
  return (
    <h2
      className={`text-4xl md:text-6xl font-bold text-secondary my-2 ${addClass}`}
    >
      {text}
      <span className="text-primary">.</span>
    </h2>
  );
};

export default SubTitle;
