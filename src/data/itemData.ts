export interface Item {
  id: string;
  name: string;
  description: string;
  weight: number;
  rarity:
    | "Common"
    | "Uncommon"
    | "Rare"
    | "Very Rare"
    | "Legendary"
    | "Artifact";
  category:
    | "Weapon"
    | "Armor"
    | "Potion"
    | "Tool"
    | "Trinket"
    | "Magical"
    | "Artifact"; // Added Artifact here
  value: string;
  isHomebrew?: boolean;
}

export const itemPool: Item[] = [
  // --- CLASSIC D&D ITEMS ---
  {
    id: "i1",
    name: "Immovable Rod",
    description:
      "A flat iron rod with a button on one end. When pressed, the rod fixes itself in space even if it is defying gravity.",
    weight: 2,
    rarity: "Uncommon",
    category: "Magical",
    value: "500 gp",
  },
  {
    id: "i2",
    name: "Potion of Healing",
    description:
      "A magical red fluid in a glass vial. Restores 2d4+2 hit points when consumed.",
    weight: 0.5,
    rarity: "Common",
    category: "Potion",
    value: "50 gp",
  },
  {
    id: "i3",
    name: "Vorpal Sword",
    description:
      "A legendary blade that ignores resistance to slashing damage. On a roll of 20, you cut off the target's head.",
    weight: 3,
    rarity: "Legendary",
    category: "Weapon",
    value: "50,000 gp",
  },
  {
    id: "i4",
    name: "Bag of Tricks (Grey)",
    description:
      "A small fuzzy bag. Reaching inside allows you to pull out a small object that transforms into a random beast.",
    weight: 1,
    rarity: "Uncommon",
    category: "Magical",
    value: "400 gp",
  },
  {
    id: "i5",
    name: "Deck of Many Things",
    description:
      "A deck of 22 cards made of ivory or vellum. Drawing a card can grant god-like power or instant soul-destruction.",
    weight: 0.5,
    rarity: "Legendary",
    category: "Artifact",
    value: "Priceless",
  },

  // --- HOMEBREW ITEMS (The "Homebrew" Engine Specials) ---
  {
    id: "hb1",
    name: "Architect's Compass",
    description:
      "A brass compass where the needle points toward the nearest 'glitch' or anomaly in reality. Smells like fresh ink.",
    weight: 1,
    rarity: "Rare",
    category: "Tool",
    value: "1,200 gp",
    isHomebrew: true,
  },
  {
    id: "hb2",
    name: "Void-Salt Shaker",
    description:
      "Seasoning any food with this salt makes it taste like the consumer's favorite childhood memory, but it turns the food pitch black.",
    weight: 0.1,
    rarity: "Common",
    category: "Trinket",
    value: "15 gp",
    isHomebrew: true,
  },
  {
    id: "hb3",
    name: "Locket of the Lost Echo",
    description:
      "A silver locket that plays the last 5 seconds of the last conversation the owner had before dying.",
    weight: 0.2,
    rarity: "Uncommon",
    category: "Trinket",
    value: "250 gp",
    isHomebrew: true,
  },
  {
    id: "hb4",
    name: "Ever-Smoking Pipe of Logic",
    description:
      "While smoking this, you have advantage on Investigation checks, but you can only speak in complex riddles.",
    weight: 0.5,
    rarity: "Uncommon",
    category: "Magical",
    value: "300 gp",
    isHomebrew: true,
  },
  {
    id: "hb5",
    name: "Gravity-Bound Boots",
    description:
      "Heavy iron boots that allow the wearer to walk on vertical surfaces, provided they move at half speed.",
    weight: 10,
    rarity: "Rare",
    category: "Armor",
    value: "2,500 gp",
    isHomebrew: true,
  },

  // --- ADVENTURING GEAR ---
  {
    id: "i6",
    name: "Thieves' Tools",
    description:
      "A set of lockpicks, a small file, and a set of narrow-bladed shears. Essential for any rogue.",
    weight: 1,
    rarity: "Common",
    category: "Tool",
    value: "25 gp",
  },
  {
    id: "i7",
    name: "Driftglobe",
    description:
      "A small glass sphere that can float in the air and emit light on command.",
    weight: 1,
    rarity: "Uncommon",
    category: "Magical",
    value: "750 gp",
  },
  {
    id: "i8",
    name: "Cloak of Displacement",
    description:
      "While wearing this cloak, you project an illusion that makes you appear to be standing a few inches from your actual location.",
    weight: 4,
    rarity: "Rare",
    category: "Magical",
    value: "3,500 gp",
  },
  {
    id: "i9",
    name: "Dust of Sneezing and Choking",
    description:
      "Looks like Dust of Appearance. When thrown, everyone in a 10ft radius must pass a save or be incapacitated by coughing.",
    weight: 0.1,
    rarity: "Uncommon",
    category: "Magical",
    value: "450 gp",
  },
  {
    id: "i10",
    name: "Folding Boat",
    description:
      "A small wooden box that, when placed in water, unfolds into a 10-foot long boat or a 24-foot long ship.",
    weight: 4,
    rarity: "Rare",
    category: "Magical",
    value: "5,000 gp",
  },
];
