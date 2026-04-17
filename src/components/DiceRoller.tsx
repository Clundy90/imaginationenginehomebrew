import React, { useState } from "react";

/**
 * Prop interface for communication with the parent App component.
 * Detailed comments preserved for code clarity.
 */
interface DiceProps {
  onRoll: (result: string) => void;
}

const DIE_TYPES = [4, 6, 8, 10, 12, 20, 100];

/**
 * Geometric shape definitions for the dice buttons.
 */
const getDieShape = (sides: number) => {
  switch (sides) {
    case 4:
      return "polygon(50% 0%, 0% 100%, 100% 100%)";
    case 6:
      return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    case 8:
      return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
    case 10:
      return "polygon(50% 0%, 100% 70%, 50% 100%, 0% 70%)";
    case 12:
      return "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)";
    case 20:
      return "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
    case 100:
      return "circle(50% at 50% 50%)";
    default:
      return "polygon(50% 0%, 100% 100%, 0% 100%)";
  }
};

export const DiceRoller = ({ onRoll }: DiceProps) => {
  const [result, setResult] = useState<number | null>(null);
  const [activeDie, setActiveDie] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  const rollDie = (sides: number) => {
    setRolling(true);
    setActiveDie(sides);

    setTimeout(() => {
      const roll = Math.floor(Math.random() * sides) + 1;
      let resultString = `D${sides}: ${roll}`;

      if (roll === 20 && sides === 20) resultString += " (CRITICAL SUCCESS)";
      if (roll === 1 && sides === 20) resultString += " (CRITICAL FUMBLE)";

      setResult(roll);
      setRolling(false);
      onRoll(resultString);
    }, 800);
  };

  const getResultStyle = () => {
    if (!result || activeDie !== 20) return { color: "var(--accent-gold)" };
    if (result === 20)
      return { color: "#ffdf00", textShadow: "0 0 30px #ffdf00" };
    if (result === 1)
      return { color: "#ff4444", textShadow: "0 0 30px #ff4444" };
    return { color: "var(--accent-gold)" };
  };

  return (
    <div className="module-viewer">
      {/* Updated Title */}
      <h2 className="accent-gold" style={{ letterSpacing: "2px" }}>
        ROLL TO DECIDE YOUR FATE
      </h2>

      <div
        className="dice-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {DIE_TYPES.map((side) => (
          <div
            key={side}
            style={{ filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.7))" }}
          >
            <button
              className={`die-button ${rolling && activeDie === side ? "rolling-phys" : ""}`}
              onClick={() => rollDie(side)}
              style={{
                width: "85px",
                height: "85px",
                clipPath: getDieShape(side),
                background:
                  rolling && activeDie === side
                    ? "#a855f7"
                    : "rgba(168, 85, 247, 0.25)",
                color: rolling && activeDie === side ? "white" : "#e9d5ff",
                border: "none",
                cursor: "pointer",
                fontSize: "1.1rem",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "monospace",
                outline: "none",
              }}
            >
              D{side}
            </button>
          </div>
        ))}
      </div>

      <div
        className="result-display"
        style={{ textAlign: "center", marginTop: "50px", minHeight: "120px" }}
      >
        {rolling ? (
          <div className="rolling-text">
            <span className="data-dim" style={{ letterSpacing: "3px" }}>
              TEARING THE VEIL...
            </span>
            <div
              className="void-bar"
              style={{
                width: "220px",
                height: "2px",
                background: "#a855f7",
                margin: "15px auto",
                animation: "void-pulse 0.8s infinite",
              }}
            ></div>
          </div>
        ) : (
          result && (
            <div
              className={result === 1 && activeDie === 20 ? "fumble-shake" : ""}
            >
              {result === 20 && activeDie === 20 && (
                <p
                  style={{
                    color: "#ffdf00",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  CRITICAL SUCCESS
                </p>
              )}
              {result === 1 && activeDie === 20 && (
                <p
                  style={{
                    color: "#ff4444",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  CRITICAL FUMBLE
                </p>
              )}
              <h1
                className="roll-animation"
                style={{
                  fontSize: "5.5rem",
                  margin: "0",
                  ...getResultStyle(),
                }}
              >
                {result}
              </h1>
            </div>
          )
        )}
      </div>

      <style>{`
        @keyframes void-pulse {
          0% { opacity: 0.2; transform: scaleX(0.1); }
          50% { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0.2; transform: scaleX(0.1); }
        }

        .fumble-shake {
          animation: shake 0.2s infinite;
        }

        @keyframes shake {
          0% { transform: translate(0,0); }
          25% { transform: translate(-5px, 5px); }
          50% { transform: translate(5px, -5px); }
          100% { transform: translate(0,0); }
        }

        .rolling-phys {
          animation: tumble 0.25s infinite linear;
        }

        @keyframes tumble {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
