import React, { useState } from "react";
import { Manifestation } from "./SessionLog";

/**
 * SavedArchives Component - Legibility & High-Contrast Version
 *
 * DESIGN UPDATE:
 * - Removed all italics to reduce eye strain.
 * - Significantly increased font sizes for body lore and titles.
 * - Used high-contrast color palette (Gold/White/Bright Purple).
 */
interface SavedArchivesProps {
  items: Manifestation[];
  onRemove: (id: number) => void;
}

export const SavedArchives = ({ items, onRemove }: SavedArchivesProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  /**
   * Helper: The Legibility Card
   * Renders data in large, easy-to-read blocks.
   */
  const renderPrettyCard = (details: any) => {
    if (!details || typeof details !== "object") {
      return (
        <p
          className="data-dim"
          style={{ fontSize: "1rem", fontStyle: "normal" }}
        >
          No further records found.
        </p>
      );
    }

    return (
      <div
        className="archive-card-content"
        style={{
          marginTop: "25px",
          padding: "25px",
          background: "rgba(255, 255, 255, 0.03)",
          border: "2px solid rgba(255, 215, 0, 0.3)", // Thicker border for visual definition
          borderRadius: "8px",
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        {/* SECTION 1: STAT GRID */}
        {details.stats && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
              gap: "15px",
              marginBottom: "25px",
              textAlign: "center",
              borderBottom: "1px solid rgba(155, 89, 182, 0.5)",
              paddingBottom: "20px",
            }}
          >
            {Object.entries(details.stats).map(([stat, val]) => (
              <div
                key={stat}
                style={{
                  background: "rgba(155, 89, 182, 0.2)",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="data-dim"
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    color: "#bbb",
                  }}
                >
                  {stat}
                </div>
                <div
                  className="accent-gold"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "900",
                    fontStyle: "normal",
                  }}
                >
                  {String(val)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECTION 2: LORE (The most important part for readability) */}
        {(details.lore || details.description) && (
          <div style={{ marginBottom: "25px" }}>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#bf77f6", // Brighter purple
                letterSpacing: "2px",
                fontWeight: "bold",
                display: "block",
                marginBottom: "10px",
              }}
            >
              ENTRY CHRONICLE
            </span>
            <p
              style={{
                color: "#ffffff", // Pure white for maximum contrast
                fontSize: "1.1rem",
                lineHeight: "1.8",
                margin: 0,
                fontStyle: "normal",
                fontFamily: "sans-serif", // Standard sans-serif is usually easier on the eyes than ornate serif
              }}
            >
              {details.lore || details.description}
            </p>
          </div>
        )}

        {/* SECTION 3: METADATA GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px",
          }}
        >
          {Object.entries(details).map(([key, value]) => {
            const skippedKeys = [
              "id",
              "img",
              "stats",
              "lore",
              "description",
              "name",
            ];
            if (skippedKeys.includes(key) || typeof value === "object")
              return null;

            return (
              <div key={key}>
                <span
                  className="data-dim"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                    display: "block",
                    fontWeight: "bold",
                    fontStyle: "normal",
                  }}
                >
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span
                  className="accent-white"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#eee",
                  }}
                >
                  {String(value)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="module-viewer archives-container">
      <div
        className="archives-window"
        style={{
          border: "2px solid var(--accent-purple)",
          padding: "40px",
          borderRadius: "12px",
          background: "rgba(10, 10, 10, 0.9)", // Darker background for better contrast
          minHeight: "600px",
        }}
      >
        <h2
          className="accent-gold"
          style={{
            textAlign: "center",
            marginBottom: "50px",
            letterSpacing: "6px",
            fontSize: "2.5rem",
            fontStyle: "normal",
          }}
        >
          Eternal Archives
        </h2>

        {items.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <p
              className="data-dim"
              style={{ fontSize: "1.2rem", fontStyle: "normal" }}
            >
              The archives are currently empty.
            </p>
          </div>
        ) : (
          <div className="archives-list">
            {items.map((item) => (
              <div
                key={item.id}
                className="archive-entry-wrapper"
                style={{
                  marginBottom: "50px",
                  paddingBottom: "30px",
                  borderBottom: "2px solid rgba(155, 89, 182, 0.2)",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#bf77f6",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontStyle: "normal",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="data-dim"
                    style={{ fontSize: "0.8rem", fontStyle: "normal" }}
                  >
                    {item.timestamp}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="accent-gold"
                  style={{
                    fontSize: "2.2rem",
                    margin: "0 0 15px 0",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    letterSpacing: "1px",
                  }}
                >
                  {String(item.value).toUpperCase()}
                </h3>

                {/* Controls */}
                <div style={{ display: "flex", gap: "20px" }}>
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                    className="nav-btn"
                    style={{
                      padding: "8px 25px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontStyle: "normal",
                      borderWidth: "2px",
                      background:
                        expandedId === item.id
                          ? "rgba(155, 89, 182, 0.3)"
                          : "transparent",
                    }}
                  >
                    {expandedId === item.id
                      ? "CLOSE RECORDS"
                      : "INSPECT RECORDS"}
                  </button>

                  <button
                    onClick={() => onRemove(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ff6666",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontStyle: "normal",
                    }}
                  >
                    [ Discard ]
                  </button>
                </div>

                {/* The "Big Text" Expansion */}
                {expandedId === item.id && renderPrettyCard(item.details)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
