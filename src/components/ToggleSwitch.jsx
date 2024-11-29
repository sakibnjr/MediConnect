import React from "react";

const ToggleSwitch = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      {label && <span className="mr-2">{label}</span>}
      <label className="swap swap-rotate">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div className="swap-on">✔️</div>
        <div className="swap-off">❌</div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
