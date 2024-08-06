const CustomButton = ({ children, purple, className, text, disabled, ...props }) => {
  const baseStyles = "w-full h-12 text-center text-base font-semibold leading-6 rounded-md";
  const purpleStyles = "text-white hover:opacity-90 bg-primary duration-300";
  const defaultStyles = "text-black bg-white hover:bg-gray-50";
  const disabledStyles = "text-white bg-gray-500 cursor-not-allowed";

  const buttonStyles = disabled ? disabledStyles : (purple ? purpleStyles : defaultStyles);

  return (
    <button className={`${baseStyles} ${buttonStyles} ${className}`} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default CustomButton;
