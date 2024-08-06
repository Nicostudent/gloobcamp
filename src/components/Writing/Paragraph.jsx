const Paragraph = ({ text, addClass }) => {
  return (
    <p className={`py-2 text-sm md:text-lg text-tertiary ${addClass}}`}>
      {text}.
    </p>
  );
};

export default Paragraph;
