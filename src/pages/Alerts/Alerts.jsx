import { useState } from "react";
import floodIcon from "../../assets/floodIcon.png";
import fireIcon from "../../assets/fireIcon.png";
import earthquakeIcon from "../../assets/EarthquakeIcon.png";
import "./Alerts.css";

const disasterIcons = {
  flood: floodIcon,
  fire: fireIcon,
  earthquake: earthquakeIcon
};

export default function AlertsTab() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [newAlert, setNewAlert] = useState({
    type: "flood",
    disaster: "",
    description: ""
  });

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "flood",
      disaster: "Flood Level 1 - 15 meters",
      description: `ALERT LEVEL 1: Water level has reached 16 meters. Please stay alert and prepare
      for possible evacuation. Monitor updates and secure important belongings.`,
      active: false
    },
    {
      id: 2,
      type: "fire",
      disaster: "Fire Warning - High Risk",
      description: `A fire has been reported in your area. Stay away from the affected zone. If you are near
      [area], evacuate immediately and proceed to the nearest safe zone or evacuation center.
      Rescue and firefighting teams are responding.`,
      active: false
    },
    {
      id: 3,
      type: "earthquake",
      disaster: "Earthquake Aftershock Warning",
      description: `An earthquake has just occurred. If indoors, drop, cover, and hold on. After the shaking stops,
      evacuate the building calmly. Check for injuries and hazards. Wait for further announcements
      and emergency response instructions.`,
      active: false
    }
  ]);

  const toggleActive = (id) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, active: !a.active } : a
      )
    );
  };

  const addAlert = () => {
    if (!newAlert.disaster.trim() || !newAlert.description.trim()) return;
    setAlerts((prev) => [
      ...prev,
      { id: Date.now(), ...newAlert, active: false }
    ]);
    setNewAlert({ type: "flood", disaster: "", description: "" });
    setShowModal(false);
  };

  const filteredAlerts = alerts.filter((alert) =>
    alert.disaster.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="alerts-tab">
      {/* ===== Header ===== */}
      <div className="header">
        <h1 className="welcome-text">
          Welcome, <span className="admin-name">Admin Name</span>
        </h1>
      </div>
      {/* Header */}
      <div className="alerts-header">
        <input
          type="text"
          placeholder="Search alerts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="alerts-search"
        />
        <button
          className="add-alert-btn"
          onClick={() => setShowModal(true)}
        >
          Add Alert
        </button>
      </div>

      {/* Alerts List */}
      <div className="alerts-list">
        {filteredAlerts.map((alert) => (
          <div className="alert-card" key={alert.id}>
            <div className="alert-icon">
              <img src={disasterIcons[alert.type]} alt={alert.type} />
            </div>
            <div className="alert-info">
              <div className="alert-title">{alert.disaster}</div>
              <div className="alert-description">{alert.description}</div>
            </div>
            <label className="alert-toggle">
              <input
                type="checkbox"
                checked={alert.active}
                onChange={() => toggleActive(alert.id)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Add Alert</h2>
            <select
              value={newAlert.type}
              onChange={(e) =>
                setNewAlert({ ...newAlert, type: e.target.value })
              }
            >
              <option value="flood">Flood</option>
              <option value="fire">Fire</option>
              <option value="earthquake">Earthquake</option>
            </select>
            <input
              type="text"
              placeholder="Disaster Title"
              value={newAlert.disaster}
              onChange={(e) =>
                setNewAlert({ ...newAlert, disaster: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              value={newAlert.description}
              onChange={(e) =>
                setNewAlert({ ...newAlert, description: e.target.value })
              }
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button className="confirm-btn" onClick={addAlert}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
