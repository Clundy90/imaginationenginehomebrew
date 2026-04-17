import React, { useState } from "react";
import { questPool } from "../data/questData";

export const QuestFinder = ({
  onLog,
}: {
  onLog: (l: string, v: string, d: any) => void;
}) => {
  const [quest, setQuest] = useState<any>(null);

  const generateQuest = () => {
    const newQuest = {
      hook: questPool.hooks[Math.floor(Math.random() * 10)],
      objective: questPool.objectives[Math.floor(Math.random() * 10)],
      pressure: questPool.pressures[Math.floor(Math.random() * 10)],
      twist: questPool.twists[Math.floor(Math.random() * 10)],
    };
    setQuest(newQuest);
    onLog("QUEST FORGED", "One-Shot", newQuest);
  };

  return (
    <div
      className="module-container"
      style={{ maxWidth: "800px", margin: "0 auto", color: "#e0e0e0" }}
    >
      <h2
        style={{
          borderBottom: "1px solid #444",
          paddingBottom: "10px",
          letterSpacing: "2px",
        }}
      >
        QUEST FINDER
      </h2>

      <div
        style={{
          margin: "30px 0",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {quest ? (
          <>
            <section>
              <h4
                style={{
                  color: "#c9a063",
                  fontSize: "0.8rem",
                  margin: "0 0 5px 0",
                }}
              >
                I. THE INCIDENT
              </h4>
              <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: "1.6" }}>
                {quest.hook}
              </p>
            </section>

            <section>
              <h4
                style={{
                  color: "#c9a063",
                  fontSize: "0.8rem",
                  margin: "0 0 5px 0",
                }}
              >
                II. THE PERIL
              </h4>
              <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: "1.6" }}>
                {quest.objective}
              </p>
              <p
                style={{
                  margin: "10px 0 0 0",
                  color: "#d9534f",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                }}
              >
                Time Constraint: {quest.pressure}
              </p>
            </section>

            <section>
              <h4
                style={{
                  color: "#c9a063",
                  fontSize: "0.8rem",
                  margin: "0 0 5px 0",
                }}
              >
                III. THE TWIST
              </h4>
              <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: "1.6" }}>
                {quest.twist}
              </p>
            </section>
          </>
        ) : (
          <p style={{ opacity: 0.5, textAlign: "center", padding: "40px" }}>
            Awaiting quest parameters...
          </p>
        )}
      </div>

      <button onClick={generateQuest} className="minimal-btn">
        GENERATE ADVENTURE
      </button>
    </div>
  );
};
