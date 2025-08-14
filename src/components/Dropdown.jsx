import React, { useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (opt) => {
    onChange(opt);
    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-selected" onClick={() => setOpen(!open)}>
        {value}
        <span className={`arrow ${open ? "up" : "down"}`}></span>
      </div>
      {open && (
        <ul className="dropdown-menu">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="dropdown-option"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
