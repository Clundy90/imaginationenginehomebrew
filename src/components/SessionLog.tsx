import React from "react";

/**
 * Manifestation interface updated to hold detailed objects.
 * This ensures "Saved Archives" gets the full data, not just strings.
 */
export interface Manifestation {
  id: number;
  label: string; // e.g., "DICE ROLL", "NPC SCOUTED"
  value: string; // The primary display text
  details?: any; // The full NPC/Monster object for archiving
  timestamp: string;
}

interface SessionLogProps {
  manifestations: Manifestation[];
  onFavorite: (item: Manifestation) => void;
}

export const SessionLog = ({ manifestations, onFavorite }: SessionLogProps) => {
  return (
    <div
      className="recent-drawer"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <h3
        className="data-label"
        style={{ color: "var(--accent-purple)", letterSpacing: "2px" }}
      >
        SESSION LOG
      </h3>

      <div
        className="manifestation-list"
        style={{
          marginTop: "15px",
          overflowY: "auto",
          flexGrow: 1,
          paddingRight: "5px",
        }}
      >
        {manifestations.length === 0 ? (
          <p className="data-dim" style={{ fontSize: "0.8rem" }}>
            No activity detected in the current stream...
          </p>
        ) : (
          manifestations.map((m) => (
            <div
              key={m.id}
              className="log-entry"
              style={{
                padding: "12px 0",
                borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  className="log-label"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--accent-gold)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {m.label}
                </span>
                <span
                  className="log-time"
                  style={{
                    fontSize: "0.6rem",
                    opacity: 0.5,
                    fontFamily: "monospace",
                  }}
                >
                  {m.timestamp}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginTop: "4px",
                }}
              >
                <div
                  className="log-value"
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "monospace",
                    color: "#fff",
                    paddingRight: "30px",
                  }}
                >
                  {m.value}
                </div>

                {/* The Favorite Star: Only shows for NPCs, Monsters, or World events */}
                {m.label !== "DICE ROLL" && (
                  <button
                    onClick={() => onFavorite(m)}
                    className="star-btn"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--accent-gold)",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      padding: "0",
                      lineHeight: "1",
                    }}
                    title="Transfer to Saved Archives"
                  >
                    ★
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .star-btn {
          transition: transform 0.2s ease, filter 0.2s ease;
          opacity: 0.6;
        }
        .star-btn:hover {
          transform: scale(1.2);
          filter: drop-shadow(0 0 5px var(--accent-gold));
          opacity: 1;
        }
        .recent-drawer::-webkit-scrollbar {
          width: 4px;
        }
        .recent-drawer::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
        }
      `}</style>
    </div>
  );
};
