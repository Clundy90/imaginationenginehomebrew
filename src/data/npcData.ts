export interface NPC {
  id: string;
  name: string;
  role: string;
  disposition: string;
  trait: string;
  quirk: string;
  description: string;
  stats: {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
  };
}

export const npcPool: NPC[] = [
  {
    id: "1",
    name: "Kaelen Voss",
    role: "Hardware-Smith",
    disposition: "Calculating",
    trait: "Can forge gear that ignores local physics.",
    quirk: "Never looks people in the eye, only their hitbox coordinates.",
    description:
      "A reclusive artisan who lives in the steam-clogged vents. He believes every soul is just a unique ID that can be hard-coded into steel.",
    stats: { STR: 14, DEX: 12, CON: 16, INT: 18, WIS: 10, CHA: 8 },
  },
  {
    id: "2",
    name: "Lyra Moonshade",
    role: "Desync-Stalker",
    disposition: "Enigmatic",
    trait:
      "Exhibits frequent collision detection errors (walks through walls).",
    quirk: "Whispers in binary when she thinks no one is listening.",
    description:
      "A survivor of a 'World Wipe,' Lyra exists halfway between the current save and the void. She often appears as a flickering, low-res silhouette.",
    stats: { STR: 8, DEX: 19, CON: 10, INT: 14, WIS: 16, CHA: 12 },
  },
  {
    id: "3",
    name: "Brogun Ironfoot",
    role: "Firewall-Warden",
    disposition: "Stalwart",
    trait: "His shield creates a 'NULL' zone for all incoming magic.",
    quirk: "Polishes his armor until it reflects the 'source code' of the sky.",
    description:
      "A veteran who refused to be 'Deleted' when his kingdom fell. He carries a shield that is literally a piece of the world's original firewall.",
    stats: { STR: 18, DEX: 8, CON: 20, INT: 10, WIS: 12, CHA: 10 },
  },
  {
    id: "4",
    name: "Sariel the Weaver",
    role: "Buffer-Reader",
    disposition: "Serene",
    trait: "Can see 3 seconds into the input buffer (the future).",
    quirk: "Finishes other people's sentences before they think them.",
    description:
      "A blind oracle who wears robes of shimmering 'logic-fiber.' She treats time like a frayed tapestry that needs constant mending to prevent a crash.",
    stats: { STR: 6, DEX: 14, CON: 12, INT: 16, WIS: 20, CHA: 14 },
  },
  {
    id: "5",
    name: "Jaxom 'Zero' Vane",
    role: "Glitch-Mage",
    disposition: "Chaotic",
    trait: "Manipulates local reality 'errors' to delete enemies.",
    quirk: "His voice echoes with a 500ms digital delay.",
    description:
      "An exiled scholar who found a hole in the logic of the world. He doesn't cast spells; he injects malicious code into the gravity parameters.",
    stats: { STR: 10, DEX: 15, CON: 11, INT: 19, WIS: 9, CHA: 13 },
  },
  {
    id: "6",
    name: "Mother Malice",
    role: "Cache-Hag",
    disposition: "Deceptive",
    trait: "Trades in 'Stored Memories' (cached data).",
    quirk: "Always offers a root that tastes like copper and burnt circuits.",
    description:
      "She is as old as the first boot-sequence. She trades secrets for memories, leaving her customers 'unoptimized' but enlightened.",
    stats: { STR: 12, DEX: 10, CON: 18, INT: 15, WIS: 17, CHA: 16 },
  },
  {
    id: "7",
    name: "Commander Thorne",
    role: "Legacy-Knight",
    disposition: "Severe",
    trait: "His presence causes the frame rate of reality to drop.",
    quirk: "His helmet is 'glitched' onto his head; it cannot be removed.",
    description:
      "An asset from a 1,000-year-old build. He serves a kingdom that was 'Patched Out' of existence generations ago.",
    stats: { STR: 19, DEX: 12, CON: 15, INT: 11, WIS: 13, CHA: 18 },
  },
  {
    id: "8",
    name: "Pip the Unlucky",
    role: "Latency-Thief",
    disposition: "Anxious",
    trait: "Accidentally 'rubber-bands' back to where he was 5 seconds ago.",
    quirk:
      "Checks his watch every thirty seconds to ensure he's still 'in sync'.",
    description:
      "A small man suffering from extreme 'Ping' issues in reality. He is perpetually five minutes late to his own life.",
    stats: { STR: 7, DEX: 18, CON: 9, INT: 13, WIS: 8, CHA: 15 },
  },
  {
    id: "9",
    name: "Elara Frostbound",
    role: "Process-Freezer",
    disposition: "Aloof",
    trait: "Freezes the 'animation cycles' of anyone she touches.",
    quirk: "Never wears shoes; her feet are always 'untextured' white blocks.",
    description:
      "Born in the 'Deep Freeze' (a system lockup), Elara seeks a flame that can override the global 'Absolute Zero' variable.",
    stats: { STR: 9, DEX: 13, CON: 14, INT: 18, WIS: 15, CHA: 11 },
  },
  {
    id: "10",
    name: "Baron von Gear",
    role: "API-Noble",
    disposition: "Pompous",
    trait: "Heads-up display (HUD) elements float around his head.",
    quirk: "Corrects everyone's grammar as if he were a spell-checker.",
    description:
      "A man who replaced his heart with a steam-powered CPU. He believes organic life is an unoptimized 'Beta' version of humanity.",
    stats: { STR: 15, DEX: 10, CON: 16, INT: 17, WIS: 11, CHA: 14 },
  },
  {
    id: "11",
    name: "Nyx the Silent",
    role: "Background-Process",
    disposition: "Merciless",
    trait: "Generates zero 'Sound Files' even when sprinting.",
    quirk: "Communicates solely through a floating 'Chat Box' illusion.",
    description:
      "A mute killer raised in the 'Dead Zones.' She views life as an unnecessary noise that needs to be 'Muted.'",
    stats: { STR: 11, DEX: 20, CON: 13, INT: 12, WIS: 15, CHA: 7 },
  },
  {
    id: "12",
    name: "Grogon the Cook",
    role: "Garbage-Collector",
    disposition: "Jovial",
    trait: "Can turn 'Deleted' assets into a world-class feast.",
    quirk: "Wears a ladle made from a dragon's 'Unrendered' rib.",
    description:
      "An ogre with a refined palate. He believes the best way to handle 'Trash' data is to braise it with a little garlic and wine.",
    stats: { STR: 20, DEX: 9, CON: 18, INT: 8, WIS: 14, CHA: 16 },
  },
  {
    id: "13",
    name: "Vespera",
    role: "Dark-Web-Witch",
    disposition: "Seductive",
    trait: "Can divide herself into a swarm of 'Low-Poly' bats.",
    quirk: "She smells of jasmine and old, overheating parchment.",
    description:
      "A mistress of the encrypted arts. She resides in a castle that only 'Spawns' during a new moon.",
    stats: { STR: 10, DEX: 16, CON: 12, INT: 17, WIS: 14, CHA: 19 },
  },
  {
    id: "14",
    name: "Krog Hammerfist",
    role: "Terrain-Crasher",
    disposition: "Blunt",
    trait: "Causes terrain generation errors with every hammer swing.",
    quirk: "Talks to his hammer as if it were a 'Customer Support' agent.",
    description:
      "A warrior who believes diplomacy is a 'Logic Error.' He prefers to solve problems by smashing them out of the map.",
    stats: { STR: 19, DEX: 7, CON: 19, INT: 6, WIS: 10, CHA: 11 },
  },
  {
    id: "15",
    name: "Zinnia Sunheart",
    role: "Gamma-Paladin",
    disposition: "Radiant",
    trait: "Glows so bright she 'blows out' the visual sensors of others.",
    quirk: "Cannot function in 'Dark Mode' (rooms without windows).",
    description:
      "A holy warrior who draws power from the world's primary light source. She is the literal 'Brightness' setting of the realm.",
    stats: { STR: 16, DEX: 11, CON: 17, INT: 10, WIS: 14, CHA: 18 },
  },
  {
    id: "16",
    name: "Silas the Scribe",
    role: "Database-Guardian",
    disposition: "Studious",
    trait: "Has read the 'Source Code' of every entity he's met.",
    quirk: "Ink stains on his fingers that flicker between black and green.",
    description:
      "The librarian of the 'Master File.' He knows how the world ends (it's a scheduled 'Server Shutdown'), but he’s sworn to secrecy.",
    stats: { STR: 5, DEX: 10, CON: 8, INT: 20, WIS: 18, CHA: 12 },
  },
  {
    id: "17",
    name: "Raven of the Wastes",
    role: "Data-Miner",
    disposition: "Cunning",
    trait: "Can find 'Hidden Assets' in a barren desert.",
    quirk: "Always keeps a shiny 'Memory Chip' in his mouth.",
    description:
      "The leader of the nomadic clans. He treats 'Junk' data like treasure and actual treasure like 'Deprecated' code.",
    stats: { STR: 13, DEX: 17, CON: 15, INT: 14, WIS: 16, CHA: 10 },
  },
  {
    id: "18",
    name: "Oryx the Blind",
    role: "Sensor-Array",
    disposition: "Wise",
    trait: "Sees through the 'Camera Views' of nearby birds.",
    quirk: "Refers to himself in the third person as 'Unit-18'.",
    description:
      "A monk who gave up his sight to see the flow of raw data. He navigates by listening to the 'Clock-Rate' of the earth.",
    stats: { STR: 9, DEX: 12, CON: 14, INT: 13, WIS: 20, CHA: 11 },
  },
  {
    id: "19",
    name: "Tessa the Tinkerer",
    role: "Dev-Tools-Expert",
    disposition: "Hyperactive",
    trait: "Always has a 'Hotpatch' for any mechanical problem.",
    quirk: "Talks at 2x speed as if she's trying to bypass a 'speech-timer'.",
    description:
      "A young genius with a mechanical arm. She believes there is no 'Bug' that cannot be solved with a bigger wrench.",
    stats: { STR: 10, DEX: 18, CON: 12, INT: 18, WIS: 9, CHA: 15 },
  },
  {
    id: "20",
    name: "Malakor the Vile",
    role: "Instance-Manager",
    disposition: "Arrogant",
    trait: "Can spawn 'Minion Instances' with a snap of his fingers.",
    quirk: "Hums 'System Chimes' to his undead thralls.",
    description:
      "A dark wizard seeking to bridge the gap between 'Active' and 'Deleted.' He's just a lonely dev who makes his own friends.",
    stats: { STR: 12, DEX: 11, CON: 14, INT: 19, WIS: 15, CHA: 17 },
  },

  {
    id: "21",
    name: "Miller",
    role: "System-Mechanic",
    disposition: "Exhausted",
    trait: "Can fix any 'Mechanical' or 'Hardware' failure with a hammer.",
    quirk:
      "Constantly wipes oil from his forehead that turns out to be coolant.",
    description:
      "A grease-stained engineer who keeps the lower-level 'pipes' of reality from bursting. He treats the world like a massive, leaking steam-engine that's overdue for a service.",
    stats: { STR: 16, DEX: 14, CON: 15, INT: 14, WIS: 12, CHA: 9 },
  },
  {
    id: "22",
    name: "Macavity.zip",
    role: "Localized Error",
    disposition: "Unpredictable",
    trait:
      "Leaves a trail of missing textures (purple/black checkers) where he walks.",
    quirk: "Talks by playing back audio logs of NPCs who have been 'Deleted'.",
    description:
      "A black cat that doesn't follow the laws of physics. He can stretch across rooms or sit on air. If he purrs, the local audio driver usually crashes.",
    stats: { STR: 3, DEX: 20, CON: 10, INT: 18, WIS: 16, CHA: 14 },
  },
  {
    id: "23",
    name: "Zing the Stress-Tester",
    role: "Spoof-Jester",
    disposition: "Obnoxious",
    trait: "His jokes cause 1d4 psychic damage due to sheer 'Cringe-Factor'.",
    quirk: "His bells sound like high-priority system error alerts.",
    description:
      "A motley-clad jester designed to test the 'Patience Variable' of the system. He knows he’s a parody and frequently breaks the fourth wall to comment on the players' 'Build Viability'.",
    stats: { STR: 10, DEX: 18, CON: 12, INT: 13, WIS: 8, CHA: 19 },
  },
  {
    id: "24",
    name: "Brixton",
    role: "Admin-Glider (Easter Egg)",
    disposition: "Friendly",
    trait: "A sugar glider that floats using 'Dev-Mode' physics.",
    quirk:
      "He has a tiny 'Admin' tag floating above his head, but zero permissions.",
    description:
      "A small, wide-eyed sugar glider that appeared in the system after a major patch. He seems to be a protected asset that cannot be harmed or targeted by enemies.",
    stats: { STR: 2, DEX: 19, CON: 10, INT: 10, WIS: 14, CHA: 20 },
  },
  {
    id: "25",
    name: "Associate 401",
    role: "Inventory-Clerk",
    disposition: "Professional",
    trait: "Can locate any 'Common' item within a 5-mile radius.",
    quirk:
      "Always asks if you 'found everything you were looking for' with a glazed look.",
    description:
      "A high-vis vest-wearing merchant who seems to exist in every town simultaneously. He offers a 10% 'Associate Discount' if you help him clear out 'Out-of-Stock' errors in the warehouse.",
    stats: { STR: 14, DEX: 11, CON: 16, INT: 12, WIS: 15, CHA: 13 },
  },
];
