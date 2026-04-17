import React, { useState } from "react";
import { Manifestation } from "./SessionLog";

interface SavedArchivesProps {
  items: Manifestation[];
  onRemove: (id: number) => void;
}

export const SavedArchives = ({ items, onRemove }: SavedArchivesProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="module-viewer" style={{ padding: "20px" }}>
      <h2
        className="accent-gold"
        style={{ letterSpacing: "4px", textAlign: "center" }}
      >
        ETHEREAL ARCHIVES
      </h2>

      <div
        className="archives-container"
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        {items.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              border: "1px dashed var(--accent-purple)",
              opacity: 0.5,
            }}
          >
            <p>The vault is eerily silent......</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="archive-card"
              style={{
                background: "rgba(20, 20, 20, 0.8)",
                border: "1px solid rgba(255, 215, 0, 0.2)",
                padding: "15px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      color: "var(--accent-purple)",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label} — {item.timestamp}
                  </span>
                  <h3 className="accent-gold" style={{ margin: "5px 0" }}>
                    {item.value}
                  </h3>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                    className="nav-btn"
                    style={{ fontSize: "0.7rem", padding: "5px 10px" }}
                  >
                    {expandedId === item.id ? "SEAL" : "INSPECT"}
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    style={{
                      background: "rgba(255, 0, 0, 0.1)",
                      border: "1px solid #ff4444",
                      color: "#ff4444",
                      fontSize: "0.6rem",
                      cursor: "pointer",
                      padding: "5px 10px",
                      borderRadius: "2px",
                    }}
                  >
                    BANISH TO THE VOID
                  </button>
                </div>
              </div>

              {/* Detailed View: Shows all the nested data logic */}
              {expandedId === item.id && item.details && (
                <div
                  style={{
                    marginTop: "15px",
                    paddingTop: "15px",
                    borderTop: "1px solid rgba(168, 85, 247, 0.3)",
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    color: "#ccc",
                  }}
                >
                  {Object.entries(item.details).map(([key, val]) => (
                    <div key={key} style={{ marginBottom: "4px" }}>
                      <span style={{ color: "var(--accent-gold)" }}>
                        {key.toUpperCase()}:
                      </span>{" "}
                      {JSON.stringify(val)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
