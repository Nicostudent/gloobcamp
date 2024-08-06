const SubTitle = ({ children, addClass }) => {
  return (
    <h2 className={`text-3xl md:text-5xl font-bold text-secondary ${addClass}`}>
      {children}
    </h2>
  );
};

export default SubTitle;
