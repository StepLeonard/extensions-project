function Button({ children, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-active={active ? "true" : "false"}
    >
      {children}
    </button>
  );
}
export default Button;
