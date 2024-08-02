const SubTitle = ({ text }) => {
  return (
    <h2 className="font-bold text-4xl md:text-6xl text-secondary">
      {text}
      <span className="text-primary">.</span>
    </h2>
  );
};

export default SubTitle;
