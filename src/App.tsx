import React, { useState, useEffect } from "react";
import "./App.css";

// --- COMPONENT IMPORTS ---
import { CharacterCreator } from "./components/CharacterCreator";
import { MonsterSummoner } from "./components/MonsterSummoner";
import { GenerateWorld } from "./components/GenerateWorld";
import { NPCGenerator } from "./components/NPCGenerator";
import { DiceRoller } from "./components/DiceRoller";
import { SavedArchives } from "./components/SavedArchives";
import { AudioPlayer } from "./components/AudioPlayer";
import { SessionLog, Manifestation } from "./components/SessionLog";
import { BagOfHolding } from "./components/BagOfHolding";

/**
 * Main Application Component: Imagination Engine Homebrew
 * Cleaned of all Auth dependencies and inline styles.
 */
const AppContent = () => {
  const [activeTab, setActiveTab] = useState<string>("character");
  const [manifestations, setManifestations] = useState<Manifestation[]>([]);

  // State for the Vault (Saved Archives) - Persists your favorite creations
  const [favorites, setFavorites] = useState<Manifestation[]>(() => {
    const saved = localStorage.getItem("imagination_vault");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync Vault to LocalStorage whenever favorites change to prevent data loss on refresh
  useEffect(() => {
    localStorage.setItem("imagination_vault", JSON.stringify(favorites));
  }, [favorites]);

  /**
   * Central function to update the Session Log.
   * Details are passed as 'any' to accommodate different object shapes.
   * Keeps a rolling history of the last 15 actions.
   */
  const addManifestation = (label: string, value: string, details?: any) => {
    const newEntry: Manifestation = {
      id: Date.now(),
      label,
      value: String(value),
      details: details || null,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setManifestations((prev) => [newEntry, ...prev].slice(0, 15));
  };

  /**
   * Moves an item from the Session Log into the permanent Favorites state.
   */
  const handleFavorite = (item: Manifestation) => {
    setFavorites((prev) => {
      // Prevent duplicate entries in the vault
      if (prev.find((f) => f.id === item.id)) return prev;
      return [item, ...prev];
    });
  };

  /**
   * Handles the rendering of the active module based on the navigation state.
   */
  const renderContent = () => {
    switch (activeTab) {
      case "character":
        return (
          <CharacterCreator
            onSave={(name: string) => addManifestation("HERO FORGED", name)}
          />
        );
      case "dice":
        return (
          <DiceRoller
            onRoll={(res: string) => addManifestation("DICE ROLL", res)}
          />
        );
      case "monster":
        return (
          <MonsterSummoner
            onSummon={(monster: any) =>
              addManifestation(
                "BEAST SUMMONED",
                monster.name || "Unknown Beast",
                monster,
              )
            }
          />
        );
      case "world":
        return (
          <GenerateWorld
            onForge={(loc: any) =>
              addManifestation(
                "WORLD WARP",
                loc.name || loc.title || "Uncharted Realm",
                loc,
              )
            }
          />
        );
      case "npc":
        return (
          <NPCGenerator
            onScout={(npc: any) =>
              addManifestation("NPC SCOUTED", npc.name, npc)
            }
          />
        );
      case "bag":
        return (
          <BagOfHolding
            // Ensure we pass all three arguments to addManifestation
            onStash={(label, name, details) =>
              addManifestation(label, name, details)
            }
          />
        );
      case "vault":
        return (
          <SavedArchives
            items={favorites}
            onRemove={(id: number) =>
              setFavorites((f) => f.filter((i) => i.id !== id))
            }
          />
        );
      default:
        return <div className="module-viewer">Select a module...</div>;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <div className="title-container">
            <h1 className="accent-gold">IMAGINATION ENGINE HOMEBREW</h1>
          </div>
          <nav className="main-nav">
            {[
              "character",
              "dice",
              "monster",
              "world",
              "npc",
              "bag",
              "vault",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "nav-btn active" : "nav-btn"}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>

        <div className="header-right">
          <AudioPlayer />
        </div>
      </header>

      <div className="main-layout">
        {/* Main interactive area for the selected module */}
        <main className="content-area">{renderContent()}</main>

        {/* Sidebar for real-time history and favoriting logic */}
        <aside className="sidebar-right">
          <SessionLog
            manifestations={manifestations}
            onFavorite={handleFavorite}
          />
        </aside>
      </div>
    </div>
  );
};

export default AppContent;
