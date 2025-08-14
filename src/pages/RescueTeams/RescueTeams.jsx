import React, { useState, useEffect } from "react";
import "./RescueTeams.css";
import Dropdown from "../../components/Dropdown";

export default function RescueTeamsTab() {
  const [isOpen, setIsOpen] = useState(true);
  const [cluster, setCluster] = useState("blue");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const clusters = [
    { name: "Cluster Blue", color: "#3B82F6" },
    { name: "Cluster Red", color: "#EF4444" },
    { name: "Cluster Green", color: "#10B981" },
  ];

  useEffect(() => {
    const dummyData = [
      { id: 1, name: "John Doe", age: 70, vulnerability: "Mobility Issues", address: "123 Elm St" },
      { id: 2, name: "Jane Smith", age: 82, vulnerability: "Heart Condition", address: "456 Oak Ave" },
      { id: 3, name: "Robert Brown", age: 65, vulnerability: "Vision Impaired", address: "789 Pine Rd" },
    ];
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  const handleFilter = (selectedCluster) => {
    setCluster(selectedCluster.toLowerCase());
    setFilteredData(data); // replace with real filter later
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const clusterColor = clusters.find(c => c.name.toLowerCase().includes(cluster))?.color || "#3B82F6";

  return (
    <div className="rescue-tab">
      {/* ===== Header ===== */}
      <div className="header">
        <h1 className="welcome-text">
          Welcome, <span className="admin-name">Admin Name</span>
        </h1>
      </div>

      {/* ===== Search + Controls Row ===== */}
      <div className="search-controls">
        <input type="text" placeholder="Search..." className="search-bar" />

        <div className="controls">
          <label className="switch">
            <input type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            <span className="slider"></span>
          </label>

          <button className="copy-btn" onClick={copyLink}>Copy Link</button>

          <div className="total-box">Total: {filteredData.length}</div>

          <Dropdown
            options={["Cluster Blue", "Cluster Red", "Cluster Green"]}
            value={cluster}
            onChange={(c) => setCluster(c)}
          />

        </div>
      </div>

      {/* ===== Table ===== */}
      {isOpen ? (
        <table className="data-table">
          <thead style={{ backgroundColor: clusterColor, color: "#fff" }}>
            <tr>
              <th>#</th>
              <th>Name of Vulnerable</th>
              <th>Age</th>
              <th>Vulnerability</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={item.id} className={idx % 2 === 0 ? "row-light" : "row-dark"}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.vulnerability}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="closed-message">Click Open to view list</div>
      )}
    </div>
  );
}
