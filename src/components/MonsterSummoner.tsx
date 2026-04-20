import React, { useState, useMemo } from "react";
import { ENHANCED_BESTIARY, Monster } from "../data/bestiary";

/**
 * MonsterSummoner Component
 * Restoration: Fixed the data pipeline to pass the full Monster object.
 * Corrected the onSummon signature to match the requirement in App.tsx.
 */
interface SummonerProps {
  // Prop signature updated to expect the full Monster object as per App.tsx requirements
  onSummon: (monster: Monster) => void;
}

export const MonsterSummoner = ({ onSummon }: SummonerProps) => {
  const [monster, setMonster] = useState<Monster | null>(null);
  const [isSummoning, setIsSummoning] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTrigger, setSearchTrigger] = useState("");

  /**
   * Filters the bestiary only when the Search Button is pressed (or Enter).
   * This prevents unnecessary re-renders while the user is typing.
   */
  const filteredBestiary = useMemo(() => {
    if (!searchTrigger) return [];
    return ENHANCED_BESTIARY.filter(
      (m) =>
        m.name.toLowerCase().includes(searchTrigger.toLowerCase()) ||
        m.type.toLowerCase().includes(searchTrigger.toLowerCase()),
    );
  }, [searchTrigger]);

  const handleSearch = () => {
    setSearchTrigger(searchTerm);
  };

  /**
   * HANDLES THE MANIFESTATION LOGIC
   * We ensure a valid monster is selected from either the search results
   * or the global list before sending it to the central App state.
   */
  const handleSummon = () => {
    setIsSummoning(true);

    setTimeout(() => {
      // Logic: If a search was performed, pull from the filtered list. Otherwise, pull from the whole void.
      const sourceList =
        filteredBestiary.length > 0 ? filteredBestiary : ENHANCED_BESTIARY;

      const selected =
        sourceList[Math.floor(Math.random() * sourceList.length)];

      /**
       * DATA INTEGRITY GUARD:
       * We verify the monster exists. We now pass the 'selected' object DIRECTLY
       * to match the App.tsx handler: onSummon={(monster) => addManifestation(...)}
       */
      if (selected && selected.name) {
        setMonster(selected);
        setIsSummoning(false);

        // SUCCESS: Passing the single monster object so App.tsx can read monster.name
        onSummon(selected);
      } else {
        console.error("Summoning failed: Selected entity is null or invalid.");
        setIsSummoning(false);
      }
    }, 600); // 600ms simulated delay for the "veils tearing" effect
  };

  return (
    <div className="module-viewer">
      <h2 className="accent-gold">MONSTER SUMMONER</h2>

      <div
        className="search-container"
        style={{ marginBottom: "20px", display: "flex", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="SEARCH THE VOID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="character-input"
          style={{ flex: 1 }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "0 20px",
            border: "1px solid var(--accent-purple)",
            background: "rgba(155, 89, 182, 0.2)", // Using a faded purple for better blending
            color: "white",
            cursor: "pointer",
          }}
        >
          SEARCH
        </button>
      </div>

      <button
        onClick={handleSummon}
        className="summon-btn"
        disabled={isSummoning}
        style={{
          width: "100%",
          marginBottom: "25px",
          padding: "15px",
          border: "1px solid var(--accent-gold)",
          background: "transparent",
          color: "var(--accent-gold)",
          cursor: "pointer",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {isSummoning ? "TEARING THE VEIL..." : "MANIFEST ENTITY"}
      </button>

      {/* Render the local visual card for the user */}
      {monster && (
        <div
          className="monster-card-detailed roll-animation"
          style={{
            border: "1px solid var(--accent-gold)",
            padding: "20px",
            background: "rgba(5, 5, 5, 0.9)",
            borderLeft: "4px solid var(--accent-gold)",
          }}
        >
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

          {/* Stat Grid */}
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
        </div>
      )}
    </div>
  );
};
