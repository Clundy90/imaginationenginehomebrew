import React, { useState } from "react";
import { TERMINAL_RESPONSES } from "../data/terminalData";

interface TerminalProps {
  onLog: (label: string, value: string, details?: any) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onLog }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [flicker, setFlicker] = useState(false);

  const handleConsult = () => {
    // Validation: Ensure the query ends with the required ritual punctuation
    if (!input.trim().endsWith("?")) {
      setOutput("[ ERROR: QUERY MALFORMED. PUNCTUATION '?' REQUIRED. ]");
      return;
    }

    setIsProcessing(true);
    setOutput("DECRYPTING FROM SYSTEM ARCHIVES...");

    // Trigger the full-screen visual glitch
    setFlicker(true);
    setTimeout(() => setFlicker(false), 150);

    // Simulate the decryption delay from the void
    setTimeout(() => {
      const randomResponse =
        TERMINAL_RESPONSES[
          Math.floor(Math.random() * TERMINAL_RESPONSES.length)
        ];

      // Update the local screen output
      setOutput(randomResponse.text);
      setIsProcessing(false);

      // Clear the input field for the next query
      setInput("");

      // Log the interaction: Passing the actual response text as the 'value'
      onLog("SYSTEM QUERY", randomResponse.text, {
        id: randomResponse.id,
        originalQuery: input,
      });
    }, 1500);
  };

  return (
    <>
      {/* Full-screen blue screen effect */}
      {flicker && <div className="full-screen-flicker" />}

      <div className="terminal-wrapper">
        <div className="terminal-container">
          <div className="terminal-body">
            {/* 1. TITLE SECTION */}
            <div className="terminal-title-zone">
              <h2 className="accent-gold terminal-main-title">
                CURSED TERMINAL
              </h2>
              <p className="terminal-sub-status">AWAITING SYSTEM ACCESS...</p>
            </div>

            {/* 2. OUTPUT SECTION: Placeholder removed as requested */}
            <div className="output-display-zone">
              <p className={isProcessing ? "processing-text" : "final-text"}>
                {/* 
                   Logic change: If there is output, show it. 
                   Otherwise, stay empty (nothing shows on start). 
                */}
                {output}
              </p>
            </div>

            <hr className="terminal-divider" />

            {/* 3. INPUT SECTION */}
            <div className="input-control-zone">
              <div className="terminal-input-wrapper">
                <span className="cursor-prompt">&gt;</span>
                <input
                  type="text"
                  placeholder="TYPE YOUR QUESTION..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleConsult()}
                  disabled={isProcessing}
                  className="void-input"
                />
              </div>

              <button
                className="terminal-btn system-consult-btn"
                onClick={handleConsult}
                disabled={isProcessing}
              >
                {isProcessing ? "COMMUNICATING..." : "CONSULT THE SYSTEM"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
