import React, { useState } from "react";
import { oraclePool, Prophecy } from "../data/oracleData";

/**
 * GLITCH ORACLE COMPONENT
 * Consults the data pool to generate a fortune or misfortune.
 * Utilizes a simulated delay to mimic system decryption for thematic effect.
 */
export const GlitchOracle = ({
  onLog,
}: {
  onLog: (l: string, v: string, d: any) => void;
}) => {
  // State to hold the current prophecy being displayed
  const [prophecy, setProphecy] = useState<Prophecy | null>(null);

  // State to handle the "calculating" suspense animation
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);

  /**
   * Handles the logic for pulling a random prophecy and applying the delay.
   */
  const consultOracle = () => {
    // Clear previous results and trigger the loading state
    setProphecy(null);
    setIsDecrypting(true);

    // Simulate a network/system delay of 1.5 seconds for dramatic effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * oraclePool.length);
      const result = oraclePool[randomIndex];

      setProphecy(result);
      setIsDecrypting(false);

      // Log the outcome to the session history/vault
      onLog(
        result.type === "Misfortune" ? "SYSTEM WARNING" : "FATE DECRYPTED",
        result.type,
        result,
      );
    }, 1500);
  };

  return (
    <div
      className="module-viewer"
      style={{
        textAlign: "center",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header section with inline styles mapping to the global CSS variables */}
      <div>
        <h2 className="accent-gold" style={{ marginBottom: "10px" }}>
          THE GLITCH ORACLE
        </h2>
        <span className="data-label" style={{ opacity: 0.7 }}>
          Awaiting Query...
        </span>
      </div>

      {/* Main display area for the loading state or the result */}
      <div style={{ padding: "40px 20px" }}>
        {isDecrypting && (
          <div
            style={{
              color: "var(--accent-purple)",
              fontFamily: "var(--font-data)",
              animation: "etherealSparkle 1s infinite alternate",
            }}
          >
            DECRYPTING DESTINY PARAMETERS...
          </div>
        )}

        {prophecy && !isDecrypting && (
          <div
            style={{
              padding: "30px",
              border: `1px solid ${prophecy.type === "Misfortune" ? "#ff4444" : "var(--accent-gold)"}`,
              backgroundColor:
                prophecy.type === "Misfortune"
                  ? "rgba(255, 68, 68, 0.05)"
                  : "var(--input-bg)",
              borderRadius: "4px",
              boxShadow: `0 0 20px ${prophecy.type === "Misfortune" ? "rgba(255,68,68,0.2)" : "var(--accent-gold-glow)"}`,
            }}
          >
            <span
              className="data-label"
              style={{
                color:
                  prophecy.type === "Misfortune"
                    ? "#ff4444"
                    : "var(--accent-gold)",
                marginBottom: "15px",
              }}
            >
              {prophecy.type === "Misfortune"
                ? "FATAL ERROR DETECTED"
                : "SYSTEM PROPHECY"}
            </span>
            <p
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.6",
                margin: 0,
                color: "#fff",
                fontStyle: "italic",
              }}
            >
              "{prophecy.text}"
            </p>
          </div>
        )}

        {/* Empty state before the user clicks the button for the first time */}
        {!prophecy && !isDecrypting && (
          <div style={{ opacity: 0.3, fontStyle: "italic" }}>
            "The code sees all. The code forgets nothing."
          </div>
        )}
      </div>

      {/* Action button utilizing the global pulse animation inherited from App.css */}
      <button
        onClick={consultOracle}
        disabled={isDecrypting}
        style={{ width: "100%", opacity: isDecrypting ? 0.5 : 1 }}
      >
        {isDecrypting ? "PROCESSING..." : "CONSULT THE SYSTEM"}
      </button>
    </div>
  );
};
