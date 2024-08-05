const LabelWithCheckbox = ({ childrenText, inputId, inputOnClick }) => {
  return (
    <label className="flex items-center gap-4 hover:bg-slate-100 py-4 rounded-md duration-100 ease-in-out">
      <input
        type="checkbox"
        id={inputId}
        className="m-4 accent-primary size-4"
        onClick={inputOnClick}
      />
      {childrenText}
    </label>
  );
};

export default LabelWithCheckbox;
