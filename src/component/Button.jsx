const Button = ({ children, className = "", ...props }) => {
  return (
    <div>
      <button
        className={`px-4 py-2 rounded-md font-medium  transition ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
