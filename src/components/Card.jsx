import Toggle from "./Toggle.jsx";

function Card({ logo, title, info, isOn, handleToggle, handleRemove }) {
  return (
    <div className="card">
      <img className="logo" src={logo} alt={`${title} logo`} />
      <div>
        <h2 className="name">{title}</h2>
        <p className="desc">{info}</p>
      </div>

      <button onClick={handleRemove} type="button">
        Remove
      </button>
      <Toggle checked={isOn} onChange={handleToggle} />
    </div>
  );
}

export default Card;
