import React, { useState, useRef, useEffect } from "react";

/**
 * AudioPlayer Component: Manages atmospheric background audio.
 * Includes volume control, toggles, and high-visibility composer attribution.
 */
export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((err) => console.error("Playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    /* Flex container set to column to stack the player and the credit */
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px", // Increased gap for better separation
        padding: "5px 0",
      }}
    >
      {/* Upper Row: Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <audio ref={audioRef} src="syouki_takahashi-midnight-forest.mp3" loop />

        {/* Volume Slider Group */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            className="data-label"
            style={{ fontSize: "0.8rem", letterSpacing: "1px" }}
          >
            VOL
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ width: "90px", cursor: "pointer", accentColor: "gold" }}
          />
        </div>

        {/* Action Button */}
        <button
          onClick={togglePlay}
          style={{
            background: isPlaying ? "gold" : "none",
            border: "2px solid gold",
            color: isPlaying ? "black" : "gold",
            padding: "8px 16px",
            fontSize: "0.9rem",
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "4px",
            boxShadow: isPlaying ? "0 0 10px rgba(255, 215, 0, 0.3)" : "none",
          }}
        >
          {isPlaying ? "PAUSE AMBIENCE" : "PLAY AMBIENCE"}
        </button>
      </div>

      {/* Lower Row: Attribution Footnote */}
      <span
        style={{
          fontSize: "0.7rem",
          color: "rgba(255, 215, 0, 0.9)",
          fontStyle: "italic",
          letterSpacing: "0.8px",
          marginRight: "4px", // Small offset to align better with the button edge
        }}
      >
        Composition by Syouki Takahashi — "Midnight Forest"
      </span>
    </div>
  );
};
