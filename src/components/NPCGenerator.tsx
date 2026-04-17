import React, { useState } from "react";
import { npcPool, NPC } from "../data/npcData";

interface Props {
  onScout: (npc: NPC) => void;
}

export const NPCGenerator = ({ onScout }: Props) => {
  const [currentNPC, setCurrentNPC] = useState<NPC | null>(null);

  const generateNPC = () => {
    const randomIndex = Math.floor(Math.random() * npcPool.length);
    const scouted = npcPool[randomIndex];
    setCurrentNPC(scouted);

    if (onScout) {
      onScout(scouted);
    }
  };

  return (
    <div
      className="module-viewer"
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 className="accent-gold" style={{ letterSpacing: "2px" }}>
          NPC GENERATOR
        </h2>
        <button onClick={generateNPC} className="summon-btn">
          SCOUT THE VOID FOR ALLIES
        </button>
      </div>

      {currentNPC && (
        <div
          className="npc-manifestation"
          style={{
            background: "rgba(30, 30, 30, 0.6)",
            border: "1px solid var(--accent-gold)",
            borderRadius: "8px",
            padding: "25px",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.1)",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              borderBottom: "1px solid rgba(255, 215, 0, 0.3)",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            <h3
              className="accent-gold"
              style={{ fontSize: "1.8rem", margin: 0 }}
            >
              {currentNPC.name.toUpperCase()}
            </h3>
            <p
              style={{
                color: "var(--accent-purple)",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "1px",
              }}
            >
              {currentNPC.role} — {currentNPC.disposition}
            </p>
          </div>

          {/* Core Info */}
          <div style={{ marginBottom: "20px" }}>
            <p
              className="data-value"
              style={{
                fontStyle: "italic",
                color: "#eee",
                marginBottom: "10px",
              }}
            >
              "{currentNPC.description}"
            </p>
            <p style={{ fontSize: "0.9rem" }}>
              <strong className="accent-gold">Primary Trait:</strong>{" "}
              {currentNPC.trait}
            </p>
            <p style={{ fontSize: "0.9rem" }}>
              <strong className="accent-gold">Quirk:</strong> {currentNPC.quirk}
            </p>
          </div>

          {/* Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              background: "rgba(0,0,0,0.3)",
              padding: "15px",
              borderRadius: "4px",
            }}
          >
            {Object.entries(currentNPC.stats).map(([stat, val]) => (
              <div
                key={stat}
                style={{
                  textAlign: "center",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  padding: "5px",
                }}
              >
                <div
                  style={{ fontSize: "0.6rem", color: "var(--accent-purple)" }}
                >
                  {stat}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .summon-btn {
          background: transparent;
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          font-family: 'Cinzel', serif;
        }
        .summon-btn:hover {
          background: var(--accent-gold);
          color: #000;
          box-shadow: 0 0 20px var(--accent-gold);
        }
      `}</style>
    </div>
  );
};
