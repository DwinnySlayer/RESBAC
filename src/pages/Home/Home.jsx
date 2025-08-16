import { useState, useEffect } from "react";
import { EllipsisVertical, RefreshCcw, Calendar } from "lucide-react";
import homeLogo from "../../assets/home.png";
import "./HomeTab.css";
import TumanaMap from "../../assets/TumanaMap.png";
import IdInfo from "./IdInfo";
import Mikyllah from "../../assets/mikyllah-grafilon.png";

export default function HomeTab() {
  const [showMenu, setShowMenu] = useState(false);
  const [clusterCount, setClusterCount] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Update date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-tab">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <span className="welcome-text">
            Welcome, <span className="admin-name">Admin Name</span>
          </span>
        </div>

        <div className="header-right">
          <EllipsisVertical
            className="ellipsis-icon"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="menu">
              <button
                onClick={() => {
                  if (window.confirm("Reset?")) {
                    console.log("Reset triggered");
                  }
                }}
                className="reset-btn"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="input-holder">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>

      {/* Main Content Row */}
      <div className="content-row">
        {/* Map Section */}
        <div className="map-section">
          <div className="section-header">
            <div className="title-left">
              <img src={homeLogo} alt="Home" className="home-logo" />
              <h2 className="title-text">Vulnerable Household Map</h2>
            </div>
            <div className="map-actions">
              <button className="refresh-btn">
                <RefreshCcw size={16} /> Refresh
              </button>
              <div className="cluster-box">Cluster count: {clusterCount}</div>
            </div>
          </div>

          <div
            className="map-container"
            onClick={() =>
              setSelectedPerson({
                photo: Mikyllah,
                firstName: "Mikyllah",
                lastName: "Grafilon",
                address: "123 Brgy. Tumana, Marikina City",
                contact: "09171234567",
                age: 45,
                emergencyContact: "Maria Dela Cruz - 09187654321",
                vulnerability: "Senior Citizen"
              })
            }
          >
            <img src={TumanaMap} alt="Map of Tumana" className="map-image" />
          </div>

        </div>

        {/* Info Panel Section */}
        <div className="info-section">
          <div className="section-header">
            <div></div> {/* Empty div to align date to right */}
            <div className="info-date">
              <span>{currentDate}</span>
              <Calendar size={16} />
            </div>
          </div>
          <div className="info-panel">
            {selectedPerson ? (
              <IdInfo person={selectedPerson} />
            ) : (
              <>
                Click on a pinpoint to see <br />
                vulnerable individual..
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}