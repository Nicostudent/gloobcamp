const SubTitle = ({ text }) => {
  return (
    <h2 className="text-6xl font-bold text-secondary">
      {text}
      <span className="text-primary">.</span>
    </h2>
  );
};

export default SubTitle;
