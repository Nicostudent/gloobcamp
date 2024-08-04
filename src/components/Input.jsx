const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      className={`w-full shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none py-2 px-4 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
