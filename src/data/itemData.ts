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
    | "Artifact";
  value: string;
  isHomebrew?: boolean;
}

export const itemPool: Item[] = [
  // --- GROUNDED CLASSICS (The Baseline) ---
  {
    id: "i1",
    name: "Immovable Rod",
    description:
      "An iron rod with a single brass button. When clicked, it defies the physics engine of the world, anchoring itself to a specific set of spatial coordinates regardless of weight or gravity.",
    weight: 2,
    rarity: "Uncommon",
    category: "Magical",
    value: "500 gp",
  },
  {
    id: "i2",
    name: "Potion of Healing",
    description:
      "A vial of shimmering red fluid that tastes like iron and cherries. It effectively 'patches' physical trauma, restoring 2d4+2 hit points to the user's health variable.",
    weight: 0.5,
    rarity: "Common",
    category: "Potion",
    value: "50 gp",
  },
  {
    id: "i3",
    name: "Vorpal Sword",
    description:
      "A blade so sharp it feels like a tear in the visual fabric. On a critical hit, it executes a 'Force Close' command on the target's neck, instantly decapitating them.",
    weight: 3,
    rarity: "Legendary",
    category: "Weapon",
    value: "50,000 gp",
  },
  {
    id: "i4",
    name: "Bag of Tricks (Grey)",
    description:
      "A fuzzy pouch that functions as a localized spawning pool. Reaching inside pulls a small gray object that instantiates into a random beast upon hitting the ground.",
    weight: 1,
    rarity: "Uncommon",
    category: "Magical",
    value: "400 gp",
  },
  {
    id: "i5",
    name: "Deck of Many Things",
    description:
      "22 cards of ivory and dread. Drawing one forces the System to recalculate the user's destiny—often resulting in massive wealth or a total character deletion.",
    weight: 0.5,
    rarity: "Legendary",
    category: "Artifact",
    value: "Priceless",
  },
  {
    id: "i6",
    name: "Wand of Magic Missiles",
    description:
      "A simple wooden wand that fires auto-aiming bolts of force. These projectiles are 'hard-coded' to never miss their target.",
    weight: 1,
    rarity: "Uncommon",
    category: "Magical",
    value: "300 gp",
  },
  {
    id: "i7",
    name: "Gauntlets of Ogre Power",
    description:
      "Heavy iron gauntlets that override the wearer's Strength score, forcing it to a constant value of 19 regardless of their original build.",
    weight: 2,
    rarity: "Uncommon",
    category: "Magical",
    value: "2,000 gp",
  },
  {
    id: "i8",
    name: "Cloak of Displacement",
    description:
      "A shimmering cloak that creates a 'desync' effect, making the wearer appear to stand several inches away from their actual physical collision box.",
    weight: 4,
    rarity: "Rare",
    category: "Magical",
    value: "3,500 gp",
  },

  // --- THE CURSED ENGINE (Tech Horror & Exploits) ---
  {
    id: "hb1",
    name: "Architect's Compass",
    description:
      "A brass tool where the needle spins wildly until it detects a 'Reality Leak.' It vibrates near invisible walls or world-geometry errors.",
    weight: 1,
    rarity: "Rare",
    category: "Tool",
    value: "1,200 gp",
    isHomebrew: true,
  },
  {
    id: "hb2",
    name: "Null-Pointer Dagger",
    description:
      "A blade that has no shadow and leaves no wound. Instead, it deletes the data of whatever it touches, causing parts of the enemy to simply 'stop rendering.'",
    weight: 1,
    rarity: "Very Rare",
    category: "Weapon",
    value: "7,500 gp",
    isHomebrew: true,
  },
  {
    id: "hb3",
    name: "Locket of the Lost Echo",
    description:
      "A silver locket containing a compressed audio file of the last 5 seconds of the previous owner's life. It loops eternally in a haunting, low-bitrate hiss.",
    weight: 0.2,
    rarity: "Uncommon",
    category: "Trinket",
    value: "250 gp",
    isHomebrew: true,
  },
  {
    id: "hb4",
    name: "Packet-Loss Lantern",
    description:
      "Emits a strobing light that causes the world to flicker. While the light is off, 'unloaded' entities like ghosts or invisible traps briefly become visible.",
    weight: 2,
    rarity: "Rare",
    category: "Magical",
    value: "2,200 gp",
    isHomebrew: true,
  },
  {
    id: "hb5",
    name: "Scroll of Ctrl+Z",
    description:
      "A one-use parchment that initiates a localized 'Rollback.' Time reverses by 6 seconds, allowing the party to undo a single catastrophic action.",
    weight: 0.1,
    rarity: "Rare",
    category: "Magical",
    value: "1,500 gp",
    isHomebrew: true,
  },
  {
    id: "hb6",
    name: "Binary Flail",
    description:
      "A weapon with two heads: one white, one black. On a hit, it either deals double maximum damage (1) or zero damage (0). There is no variance.",
    weight: 6,
    rarity: "Uncommon",
    category: "Weapon",
    value: "800 gp",
    isHomebrew: true,
  },
  {
    id: "hb7",
    name: "Liquid Memory (Potion)",
    description:
      "A glowing blue syrup that allows the consumer to access a 'Save State.' They can temporarily recall skills or languages they haven't learned yet.",
    weight: 0.5,
    rarity: "Rare",
    category: "Potion",
    value: "1,100 gp",
    isHomebrew: true,
  },
  {
    id: "hb8",
    name: "Dead-Pixel Marble",
    description:
      "A small black sphere that absorbs all light. If dropped, it creates a 5ft hole in the floor that leads to the 'Void Beneath the Map.' Extremely dangerous.",
    weight: 0.1,
    rarity: "Legendary",
    category: "Trinket",
    value: "18,000 gp",
    isHomebrew: true,
  },
  {
    id: "hb9",
    name: "Wireframe Circlet",
    description:
      "When worn, the world loses its textures. You see through walls as glowing green grids, highlighting secret doors, hidden loot, and wire-thin traps.",
    weight: 1,
    rarity: "Very Rare",
    category: "Magical",
    value: "10,500 gp",
    isHomebrew: true,
  },
  {
    id: "hb10",
    name: "The Admin's Gavel",
    description:
      "A stone hammer used to 'Mute' the world. A strike against a surface creates a 30ft zone of absolute silence, as if the audio drivers were uninstalled.",
    weight: 8,
    rarity: "Very Rare",
    category: "Weapon",
    value: "13,000 gp",
    isHomebrew: true,
  },
  {
    id: "hb11",
    name: "Overclocked Hourglass",
    description:
      "The sand inside moves at triple speed. Breaking the glass gives the user 3 actions in a single turn, followed by a 'Total System Overheat' (3 levels of exhaustion).",
    weight: 1,
    rarity: "Rare",
    category: "Magical",
    value: "2,400 gp",
    isHomebrew: true,
  },
  {
    id: "hb12",
    name: "Antivirus Gambeson",
    description:
      "Padded armor stitched with holy syntax. It grants immunity to 'Corrupt' status effects and prevents the wearer's metadata from being altered by Void entities.",
    weight: 8,
    rarity: "Rare",
    category: "Armor",
    value: "3,200 gp",
    isHomebrew: true,
  },
  {
    id: "hb13",
    name: "Sprite-Sheet Map",
    description:
      "A map that shows the world as a 2D grid. It updates in real-time, showing enemies as small flickering icons, even through solid stone.",
    weight: 0.5,
    rarity: "Rare",
    category: "Tool",
    value: "1,800 gp",
    isHomebrew: true,
  },
  {
    id: "hb14",
    name: "Root-Access Ring",
    description:
      "The ultimate breach. Once per century, the wearer can change a single global variable—such as making gold worthless or making fire freeze instead of burn.",
    weight: 0.1,
    rarity: "Artifact",
    category: "Artifact",
    value: "Priceless",
    isHomebrew: true,
  },
  {
    id: "hb15",
    name: "Glitch-Bound Boots",
    description:
      "Boots that allow the wearer to 'blink' short distances. To onlookers, you appear to teleport, but you're actually just skipping the frames of movement.",
    weight: 3,
    rarity: "Very Rare",
    category: "Magical",
    value: "9,000 gp",
    isHomebrew: true,
  },

  // --- ADVENTURING GEAR (Miscellaneous) ---
  {
    id: "i9",
    name: "Thieves' Tools",
    description:
      "A collection of lockpicks and tension wrenches. Essential for manual bypass of mechanical security protocols.",
    weight: 1,
    rarity: "Common",
    category: "Tool",
    value: "25 gp",
  },
  {
    id: "i10",
    name: "Driftglobe",
    description:
      "A glass sphere that sheds light. It follows the user like a floating 'Light Source' asset, illuminating the darkness.",
    weight: 1,
    rarity: "Uncommon",
    category: "Magical",
    value: "750 gp",
  },
  {
    id: "i11",
    name: "Folding Boat",
    description:
      "A box that unfolds into a vessel. It is a highly compressed asset that expands only when placed in a 'Water' tile.",
    weight: 4,
    rarity: "Rare",
    category: "Magical",
    value: "5,000 gp",
  },
  {
    id: "i12",
    name: "Dust of Sneezing and Choking",
    description:
      "A fine powder that looks like Dust of Appearance. Throwing it triggers a 'Stun' loop in anyone who breathes it in.",
    weight: 0.1,
    rarity: "Uncommon",
    category: "Magical",
    value: "450 gp",
  },
  {
    id: "i13",
    name: "Bag of Holding",
    description:
      "An external storage drive for the physical world. It allows the user to carry up to 500 lbs of assets while only weighing 15 lbs themselves.",
    weight: 15,
    rarity: "Uncommon",
    category: "Magical",
    value: "4,000 gp",
  },
  {
    id: "i14",
    name: "Ring of Protection",
    description:
      "A simple gold band that adds a +1 modifier to the user's Armor Class and Saving Throw variables.",
    weight: 0.1,
    rarity: "Rare",
    category: "Magical",
    value: "3,000 gp",
  },
  {
    id: "i15",
    name: "Shield +1",
    description:
      "A reinforced steel shield. Its defensive values have been 'patched' to provide superior protection against incoming attacks.",
    weight: 6,
    rarity: "Uncommon",
    category: "Armor",
    value: "1,500 gp",
  },
];
