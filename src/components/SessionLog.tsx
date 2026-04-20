import React from "react";

/**
 * MANIFESTATION INTERFACE
 * This is the contract for how data moves through the engine.
 * If 'value' is "Unknown", the break is happening in the MonsterSummoner
 * component or the App.tsx onSummon prop.
 */
export interface Manifestation {
  id: number;
  label: string; // e.g., "BEAST SUMMONED"
  value: string; // e.g., "Ancient Red Dragon" (This is showing "Unknown")
  details?: any; // The full object (HP, AC, Stats)
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
            No activity detected...
          </p>
        ) : (
          manifestations.map((m) => (
            <div
              key={m.id}
              className="log-entry"
              style={{
                padding: "12px 0",
                borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              {/* TOP ROW: LABEL & TIME */}
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

              {/* BOTTOM ROW: VALUE & FAVORITE BUTTON */}
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
                  {/**
                   * DEBUGGING TIP:
                   * If this renders "Unknown", it means App.tsx received "Unknown"
                   * inside the 'monster.name' field.
                   * String() conversion here ensures we don't crash on objects.
                   */}
                  {m.value ? String(m.value) : "VOID_NULL"}
                </div>

                {/* 
                   THE STAR (FAVORITE) BUTTON 
                   We disable this for DICE ROLLs to keep the Archive clean.
                */}
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
    </div>
  );
};
