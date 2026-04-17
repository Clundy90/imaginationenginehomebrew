import React, { useState } from "react";
import { worldPool, WorldLocation } from "../data/worldData";

interface WorldProps {
  onForge: (location: WorldLocation) => void;
}

export const GenerateWorld = ({ onForge }: WorldProps) => {
  const [currentWorld, setCurrentWorld] = useState<WorldLocation | null>(null);

  const forgeReality = () => {
    const randomIndex = Math.floor(Math.random() * worldPool.length);
    const location = worldPool[randomIndex];
    setCurrentWorld(location);

    // Pass full object to archive/log
    if (onForge) {
      onForge(location);
    }
  };

  return (
    <div className="module-viewer" style={{ padding: "15px" }}>
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <h2
          className="accent-gold"
          style={{
            letterSpacing: "3px",
            fontSize: "1.5rem",
            margin: "0 0 10px 0",
          }}
        >
          WORLD GENERATOR
        </h2>
        <button onClick={forgeReality} className="summon-btn">
          FORGE REALITY
        </button>
      </div>

      {currentWorld && (
        <div
          className="world-manifestation"
          style={{
            background: "rgba(20, 10, 30, 0.7)",
            border: "1px solid var(--accent-purple)",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.15)",
            position: "relative",
          }}
        >
          <header
            style={{
              borderBottom: "1px solid rgba(255,215,0,0.2)",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            <h3
              className="accent-gold"
              style={{
                fontSize: "1.8rem",
                margin: "0",
                textTransform: "uppercase",
                lineHeight: "1.2",
              }}
            >
              {currentWorld.name}
            </h3>
          </header>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "20px",
              rowGap: "12px",
            }}
          >
            <div>
              <p
                className="data-label"
                style={{ fontSize: "0.7rem", marginBottom: "3px" }}
              >
                BIOME
              </p>
              <p
                className="data-value"
                style={{ color: "#fff", fontSize: "1rem" }}
              >
                {currentWorld.biome}
              </p>
            </div>
            <div>
              <p
                className="data-label"
                style={{ fontSize: "0.7rem", marginBottom: "3px" }}
              >
                WEATHER
              </p>
              <p
                className="data-value"
                style={{ color: "#fff", fontSize: "1rem" }}
              >
                {currentWorld.weather}
              </p>
            </div>
            <div>
              <p
                className="data-label"
                style={{ fontSize: "0.7rem", marginBottom: "3px" }}
              >
                MAGIC
              </p>
              <p
                className="data-value"
                style={{ color: "var(--accent-purple)", fontSize: "1rem" }}
              >
                {currentWorld.magicPrevalence}
              </p>
            </div>
            <div>
              <p
                className="data-label"
                style={{ fontSize: "0.7rem", marginBottom: "3px" }}
              >
                RELIGION
              </p>
              <p
                className="data-value"
                style={{ color: "var(--accent-gold)", fontSize: "1rem" }}
              >
                {currentWorld.religiousInfluence}
              </p>
            </div>
            {/* Threat level moved to a more compact spot at the bottom right */}
            <div
              style={{
                gridColumn: "span 2",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="data-label" style={{ fontSize: "0.7rem" }}>
                THREAT LEVEL
              </p>
              <p
                className="data-value"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: currentWorld.threatLevel > 7 ? "#ff4444" : "#4ade80",
                }}
              >
                {currentWorld.threatLevel} / 10
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "15px",
              padding: "12px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "4px",
              borderLeft: "4px solid var(--accent-gold)",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                color: "#eee",
                margin: 0,
              }}
            >
              "{currentWorld.description}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
