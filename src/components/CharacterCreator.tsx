import React, { useState } from "react";

/**
 * Prop interface for communication with the parent App component.
 * Detailed comments preserved to maintain code documentation standards.
 */
interface Props {
  onSave: (name: string) => void;
}

export const CharacterCreator = ({ onSave }: Props) => {
  const [name, setName] = useState("");
  const [alignment, setAlignment] = useState("Neutral");
  const [description, setDescription] = useState("");
  const [motivation, setMotivation] = useState("");
  const [stats, setStats] = useState({
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10,
  });

  /**
   * Generates a random stat block using a 1d13+6 range.
   */
  const rollStats = () => {
    const newStats = {
      STR: Math.floor(Math.random() * 13) + 6,
      DEX: Math.floor(Math.random() * 13) + 6,
      CON: Math.floor(Math.random() * 13) + 6,
      INT: Math.floor(Math.random() * 13) + 6,
      WIS: Math.floor(Math.random() * 13) + 6,
      CHA: Math.floor(Math.random() * 13) + 6,
    };
    setStats(newStats);
  };

  const handleSave = () => {
    if (name) onSave(name);
  };

  return (
    <div
      className="module-viewer"
      style={{
        padding: "20px",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        border: "none", // Removed any phantom borders
        background: "transparent",
      }}
    >
      <h2
        className="accent-gold"
        style={{ marginTop: "0", marginBottom: "15px" }}
      >
        CHARACTER FORGE
      </h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="ENTER HERO NAME..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="character-input"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <select
            className="character-input"
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
            style={{
              flex: 1,
              background: "#1a1a1a",
              color: "var(--accent-gold)",
              cursor: "pointer",
            }}
          >
            <option style={{ background: "#1a1a1a" }} value="Lawful Good">
              Lawful Good
            </option>
            <option style={{ background: "#1a1a1a" }} value="Neutral Good">
              Neutral Good
            </option>
            <option style={{ background: "#1a1a1a" }} value="Chaotic Good">
              Chaotic Good
            </option>
            <option style={{ background: "#1a1a1a" }} value="Lawful Neutral">
              Lawful Neutral
            </option>
            <option style={{ background: "#1a1a1a" }} value="True Neutral">
              True Neutral
            </option>
            <option style={{ background: "#1a1a1a" }} value="Chaotic Neutral">
              Chaotic Neutral
            </option>
            <option style={{ background: "#1a1a1a" }} value="Lawful Evil">
              Lawful Evil
            </option>
            <option style={{ background: "#1a1a1a" }} value="Neutral Evil">
              Neutral Evil
            </option>
            <option style={{ background: "#1a1a1a" }} value="Chaotic Evil">
              Chaotic Evil
            </option>
          </select>
          <button
            onClick={rollStats}
            className="summon-btn"
            style={{ flex: 1 }}
          >
            ROLL STATS
          </button>
        </div>
      </div>

      <div
        className="stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {Object.entries(stats).map(([key, val]) => (
          <div
            key={key}
            className="stat-box"
            style={{
              borderBottom: "1px solid rgba(255, 215, 0, 0.4)",
              paddingBottom: "5px",
            }}
          >
            <span className="data-label" style={{ fontSize: "0.7rem" }}>
              {key}
            </span>
            <span
              className="data-value"
              style={{
                float: "right",
                fontSize: "1.2rem",
                color: "var(--accent-gold)",
              }}
            >
              {val}
            </span>
          </div>
        ))}
      </div>

      <div className="narrative-inputs" style={{ marginTop: "20px" }}>
        <h4
          className="data-label"
          style={{ fontSize: "0.7rem", marginBottom: "8px", color: "#a855f7" }}
        >
          HERO BACKGROUND
        </h4>
        <textarea
          placeholder="PHYSICAL DESCRIPTION..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,215,0,0.2)",
            color: "#ccc",
            padding: "10px",
            fontSize: "0.8rem",
            height: "55px",
            marginBottom: "10px",
            resize: "none",
            fontFamily: "monospace",
          }}
        />
        <textarea
          placeholder="CORE MOTIVATION..."
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,215,0,0.2)",
            color: "#ccc",
            padding: "10px",
            fontSize: "0.8rem",
            height: "55px",
            resize: "none",
            fontFamily: "monospace",
          }}
        />
      </div>

      <button
        onClick={handleSave}
        className="summon-btn"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          background: "var(--accent-gold)",
          color: "black",
          fontWeight: "bold",
          boxShadow: "0 0 15px rgba(255, 215, 0, 0.2)",
          border: "none",
        }}
      >
        MANIFEST HERO
      </button>
      {/* Phantom box removed from here */}
    </div>
  );
};
