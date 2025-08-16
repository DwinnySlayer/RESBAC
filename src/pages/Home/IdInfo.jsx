import { useState } from "react";
import "./IdInfo.css";

export default function IdInfo({ person }) {
  const [status, setStatus] = useState("Safe");

  const toggleStatus = () => {
    setStatus((prev) => (prev === "Safe" ? "Pending Rescue" : "Safe"));
  };

  return (
    <div className="id-card">
      {/* Top Section */}
      <div className="id-card-header">
        <div className="id-card-left">
          <img
            src={person.photo}
            alt={person.name}
            className="id-photo"
          />
          <h3 className="id-name">
            <span className="first-name">{person.firstName}</span>
            <span className="last-name">{person.lastName}</span>
          </h3>

        </div>
        <button
          className={`status-btn ${status === "Safe" ? "safe" : "pending"}`}
          onClick={toggleStatus}
        >
          {status}
        </button>
      </div>

      {/* Personal Info Title */}
      <div className="info-section-title">
        <span>Personal Information</span>
        <div className="divider"></div>
      </div>

      {/* Address */}
      <div className="info-row">
        <small className="label">Address</small>
        <p className="info-text">{person.address}</p>
      </div>

      {/* Contact + Age */}
      <div className="info-row-horizontal">
        <div>
          <small className="label">Contact Number</small>
          <p className="info-text">{person.contact}</p>
        </div>
        <div>
          <small className="label">Age</small>
          <p className="info-text">{person.age}</p>
        </div>
      </div>

      {/* Emergency Contact + Vulnerability */}
      <div className="info-row-horizontal">
        <div>
          <small className="label">Emergency Contact</small>
          <p className="info-text">{person.emergencyContact}</p>
        </div>
        <div>
          <small className="label">Vulnerability</small>
          <p className="info-text">{person.vulnerability}</p>
        </div>
      </div>
    </div>
  );
}
