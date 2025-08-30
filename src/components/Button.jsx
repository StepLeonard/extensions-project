// components/Button.jsx
function Button({ children, active, ...rest }) {
  return (
    <button data-active={active ? "true" : "false"} {...rest}>
      {children}
    </button>
  );
}

export default Button;
