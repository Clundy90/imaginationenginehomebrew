import React, { useState, useMemo } from "react";
import { ENHANCED_BESTIARY, Monster } from "../data/bestiary";

/**
 * Prop interface for communication with the parent App component.
 */
interface SummonerProps {
  onSummon: (name: string) => void;
}

export const MonsterSummoner = ({ onSummon }: SummonerProps) => {
  const [monster, setMonster] = useState<Monster | null>(null);
  const [isSummoning, setIsSummoning] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Performance optimization: Filter the 50+ monster list only when searchTerm changes.
   */
  const filteredBestiary = useMemo(() => {
    return ENHANCED_BESTIARY.filter(
      (m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.type.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  /**
   * Handles the 'tearing' logic.
   * If a search is active, it pulls randomly from the filtered results.
   */
  const handleSummon = () => {
    setIsSummoning(true);

    setTimeout(() => {
      const sourceList =
        filteredBestiary.length > 0 ? filteredBestiary : ENHANCED_BESTIARY;
      const selected =
        sourceList[Math.floor(Math.random() * sourceList.length)];

      setMonster(selected);
      setIsSummoning(false);
      onSummon(selected.name);
    }, 600);
  };

  return (
    <div className="module-viewer">
      <h2 className="accent-gold">MONSTER SUMMONER</h2>

      <div
        className="search-container"
        style={{ marginBottom: "20px", position: "relative" }}
      >
        <input
          type="text"
          placeholder="SEARCH THE VOID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            color: "var(--accent-gold)",
            padding: "12px",
            fontSize: "0.8rem",
            fontFamily: "monospace",
            outline: "none",
          }}
        />
        {searchTerm && (
          <span
            style={{
              fontSize: "0.6rem",
              position: "absolute",
              right: "10px",
              bottom: "-15px",
            }}
            className="data-dim"
          >
            {filteredBestiary.length} ENTITIES FOUND
          </span>
        )}
      </div>

      <button
        onClick={handleSummon}
        className="summon-btn"
        style={{
          width: "100%",
          marginBottom: "25px",
          padding: "15px",
          border: "1px solid var(--accent-gold)",
          background: "transparent",
          color: "var(--accent-gold)",
          cursor: "pointer",
          textTransform: "uppercase",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
        disabled={isSummoning}
      >
        {isSummoning ? "TEARING THE VEIL..." : "MANIFEST ENTITY"}
      </button>

      {monster && (
        <div
          className="monster-card-detailed roll-animation"
          style={{
            border: "1px solid var(--accent-gold)",
            padding: "20px",
            background: "rgba(5, 5, 5, 0.8)",
            borderLeft: "4px solid var(--accent-gold)",
            boxShadow: "inset 0 0 20px rgba(168, 85, 247, 0.1)",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,215,0,0.2)",
              paddingBottom: "10px",
            }}
          >
            <div>
              <h3
                className="accent-gold"
                style={{ fontSize: "1.5rem", margin: 0 }}
              >
                {monster.name.toUpperCase()}
              </h3>
              <p className="data-dim" style={{ margin: 0, fontSize: "0.7rem" }}>
                TYPE: {monster.type.toUpperCase()} // CR: {monster.cr}
              </p>
            </div>
            <div style={{ textAlign: "right", fontFamily: "monospace" }}>
              <p className="data-label" style={{ margin: 0, color: "#ff4444" }}>
                HP: {monster.hp}
              </p>
              <p className="data-label" style={{ margin: 0, color: "#44aaff" }}>
                AC: {monster.ac}
              </p>
            </div>
          </div>

          {/* Stat Block */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px 0",
              background: "rgba(255,215,0,0.03)",
              padding: "10px",
            }}
          >
            {Object.entries(monster.stats).map(([stat, val]) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <div className="data-dim" style={{ fontSize: "0.6rem" }}>
                  {stat}
                </div>
                <div className="accent-gold" style={{ fontSize: "0.9rem" }}>
                  {val}
                </div>
              </div>
            ))}
          </div>

          {/* Lore Section */}
          <div style={{ marginTop: "15px" }}>
            <h4
              className="data-label"
              style={{ marginBottom: "8px", fontSize: "0.7rem" }}
            >
              BESTIARY LORE
            </h4>
            <p
              className="item-description"
              style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#ccc" }}
            >
              {monster.lore}
            </p>
          </div>

          {/* Abilities */}
          <div style={{ marginTop: "20px" }}>
            <h4
              className="data-label"
              style={{ marginBottom: "10px", fontSize: "0.7rem" }}
            >
              ABILITIES & TRAITS
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {monster.abilities.map((ability) => (
                <span
                  key={ability}
                  style={{
                    fontSize: "0.65rem",
                    padding: "3px 10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "2px",
                    color: "#eee",
                  }}
                >
                  {ability.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonsterSummoner;
