import Switch from "react-switch";

function Toggle({ checked, onChange }) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
      onColor="#ef4444"
      offColor="#475569"
    />
  );
}
export default Toggle;
