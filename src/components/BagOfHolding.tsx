import React, { useState } from "react";
import { itemPool, Item } from "../data/itemData";

interface BagProps {
  /**
   * Syncs the stashed item to the main Engine Session Log.
   * @param label - The action tag (e.g., "STASHED")
   * @param value - The name of the item
   * @param details - The full item object for the archive/vault
   */
  onStash: (label: string, value: string, details?: any) => void;
}

/**
 * Bag of Holding: A utility module for generating and stashing items.
 * Displays the most recently stashed item with full data visualization.
 */
export const BagOfHolding = ({ onStash }: BagProps) => {
  const [customName, setCustomName] = useState("");
  const [customDesc, setCustomDesc] = useState("");

  // Local state to track the "Active Manifestation" (the last item stashed)
  const [lastStashed, setLastStashed] = useState<Item | null>(null);

  /**
   * Helper to map D&D rarities to their traditional UI colors.
   */
  const getRarityColor = (rarity: string) => {
    const colors: Record<string, string> = {
      Legendary: "#ff8000",
      "Very Rare": "#a335ee",
      Rare: "#0070dd",
      Uncommon: "#1eff00",
      Artifact: "#e6cc80",
    };
    return colors[rarity] || "#ffffff";
  };

  /**
   * Pulls a random item from the itemData.ts pool and manifests it.
   */
  const drawFromPool = () => {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    const item = itemPool[randomIndex];

    setLastStashed(item); // Show on main screen
    onStash("STASHED", item.name, item); // Send to Sidebar/Archive
  };

  /**
   * Forges a custom homebrew item based on user input.
   */
  const stashCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (customName.trim()) {
      const homebrew: Item = {
        id: `custom-${Date.now()}`,
        name: customName,
        description: customDesc || "A unique item of mysterious origin.",
        weight: 1,
        rarity: "Common",
        category: "Trinket",
        value: "Unknown",
        isHomebrew: true,
      };

      setLastStashed(homebrew); // Show on main screen
      onStash("STASHED", homebrew.name, homebrew); // Send to Sidebar/Archive

      // Reset form fields
      setCustomName("");
      setCustomDesc("");
    }
  };

  return (
    <div className="module-viewer" style={{ padding: "15px" }}>
      <h2
        className="accent-gold"
        style={{
          letterSpacing: "4px",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        BAG OF HOLDING
      </h2>

      {/* --- RECENT ITEM MANIFESTATION --- */}
      <div style={{ minHeight: "180px", marginBottom: "40px" }}>
        {lastStashed ? (
          <div
            style={{
              background: "rgba(30, 20, 45, 0.9)",
              border: `2px solid ${getRarityColor(lastStashed.rarity)}`,
              boxShadow: `0 0 20px ${getRarityColor(lastStashed.rarity)}44`,
              padding: "20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
          >
            {/* Header: Name and Rarity */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "1.3rem",
                  letterSpacing: "1px",
                }}
              >
                {lastStashed.name}
              </h3>
              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: getRarityColor(lastStashed.rarity),
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  {lastStashed.rarity.toUpperCase()}
                </span>
                {lastStashed.isHomebrew && (
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: "gold",
                      letterSpacing: "1px",
                    }}
                  >
                    [HOMEBREW]
                  </span>
                )}
              </div>
            </div>

            {/* Description/Lore Block */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#eee",
                margin: "15px 0",
                fontStyle: "italic",
                lineHeight: "1.5",
                borderLeft: `2px solid ${getRarityColor(lastStashed.rarity)}55`,
                paddingLeft: "12px",
              }}
            >
              "{lastStashed.description}"
            </p>

            {/* Data Grid: Full Item Variable Set */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "20px",
                paddingTop: "15px",
                borderTop: "1px solid rgba(255,215,0,0.1)",
              }}
            >
              <span
                style={{ fontSize: "0.75rem", color: "rgba(255,215,0,0.8)" }}
              >
                WEIGHT:{" "}
                <span style={{ color: "#fff", fontWeight: "bold" }}>
                  {lastStashed.weight} lbs
                </span>
              </span>
              <span
                style={{ fontSize: "0.75rem", color: "rgba(255,215,0,0.8)" }}
              >
                VALUE:{" "}
                <span style={{ color: "#fff", fontWeight: "bold" }}>
                  {lastStashed.value}
                </span>
              </span>
              <span
                style={{ fontSize: "0.75rem", color: "rgba(255,215,0,0.8)" }}
              >
                CATEGORY:{" "}
                <span style={{ color: "#fff", fontWeight: "bold" }}>
                  {lastStashed.category}
                </span>
              </span>
              <span
                style={{ fontSize: "0.75rem", color: "rgba(255,215,0,0.8)" }}
              >
                REF_ID:{" "}
                <span style={{ color: "#fff", opacity: 0.4 }}>
                  {lastStashed.id}
                </span>
              </span>
            </div>
          </div>
        ) : (
          /* Empty State Placeholder */
          <div
            style={{
              height: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed rgba(255,215,0,0.2)",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.9rem",
                letterSpacing: "2px",
              }}
            >
              REACH INTO THE VOID...
            </p>
          </div>
        )}
      </div>

      {/* --- CONTROL INTERFACE --- */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* Random Loot Generator */}
        <button
          onClick={drawFromPool}
          className="summon-btn"
          style={{
            width: "100%",
            height: "55px",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          DRAW RANDOM LOOT
        </button>

        {/* Custom Item Forge Section */}
        <div
          style={{
            borderTop: "1px solid rgba(255,215,0,0.1)",
            paddingTop: "30px",
          }}
        >
          <p
            className="data-label"
            style={{
              textAlign: "center",
              fontSize: "0.65rem",
              marginBottom: "15px",
              letterSpacing: "2px",
            }}
          >
            — CUSTOM ARTIFACT FORGE —
          </p>

          <form
            onSubmit={stashCustomItem}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Item Name..."
              autoComplete="off"
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "1px solid var(--accent-gold)",
                padding: "12px",
                borderRadius: "4px",
              }}
            />
            <textarea
              value={customDesc}
              onChange={(e) => setCustomDesc(e.target.value)}
              placeholder="Magic properties, weight, or lore..."
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "1px solid var(--accent-gold)",
                padding: "12px",
                height: "90px",
                resize: "none",
                borderRadius: "4px",
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              className="nav-btn"
              style={{
                alignSelf: "center",
                border: "1px solid gold",
                padding: "10px 30px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              STASH ITEM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
