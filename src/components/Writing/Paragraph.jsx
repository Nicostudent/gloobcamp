const Paragraph = ({ children, addClass }) => {
  return (
    <p className={`text-sm md:text-lg text-tertiary ${addClass}}`}>
      {children}
    </p>
  );
};

export default Paragraph;
