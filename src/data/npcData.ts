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
    role: "Aether-Smith",
    disposition: "Calculating",
    trait: "Master of runic metals.",
    quirk: "Never looks people in the eye, only their hands.",
    description:
      "A reclusive artisan who lives in the steam-clogged vents of the Lower Spire. He believes every soul has a resonance that can be forged into steel.",
    stats: { STR: 14, DEX: 12, CON: 16, INT: 18, WIS: 10, CHA: 8 },
  },
  {
    id: "2",
    name: "Lyra Moonshade",
    role: "Void-Stalker",
    disposition: "Enigmatic",
    trait: "Can phase through physical barriers.",
    quirk: "Whispers to shadows when she thinks no one is listening.",
    description:
      "A survivor of the Eclipse War, Lyra exists halfway between the physical world and the Void. She often appears as a flickering silhouette.",
    stats: { STR: 8, DEX: 19, CON: 10, INT: 14, WIS: 16, CHA: 12 },
  },
  {
    id: "3",
    name: "Brogun Ironfoot",
    role: "Shield-Warden",
    disposition: "Stalwart",
    trait: "Unbreakable defensive stance.",
    quirk: "Polishes his armor even in the middle of a conversation.",
    description:
      "A veteran of the Iron Marches who refused to retreat when the sky fell. He carries a shield made from the door of a forgotten cathedral.",
    stats: { STR: 18, DEX: 8, CON: 20, INT: 10, WIS: 12, CHA: 10 },
  },
  {
    id: "4",
    name: "Sariel the Weaver",
    role: "Fate-Mender",
    disposition: "Serene",
    trait: "Can see 3 seconds into the future.",
    quirk: "Finishes other people's sentences correctly.",
    description:
      "A blind oracle who wears robes made of shimmering light. She treats time like a frayed tapestry that needs constant mending.",
    stats: { STR: 6, DEX: 14, CON: 12, INT: 16, WIS: 20, CHA: 14 },
  },
  {
    id: "5",
    name: "Jaxom 'Zero' Vane",
    role: "Glitch-Mage",
    disposition: "Chaotic",
    trait: "Manipulates local reality 'errors'.",
    quirk: "His voice occasionally echoes with a digital delay.",
    description:
      "An exiled scholar who found a hole in the logic of the world. He doesn't cast spells; he rewrites the source code of gravity.",
    stats: { STR: 10, DEX: 15, CON: 11, INT: 19, WIS: 9, CHA: 13 },
  },
  {
    id: "6",
    name: "Mother Malice",
    role: "Swamp-Hag",
    disposition: "Deceptive",
    trait: "Commands swarms of glass-winged insects.",
    quirk: "Always offers a sweet-smelling root that tastes like copper.",
    description:
      "She claims to be as old as the mud itself. She trades secrets for memories, leaving her customers confused but enlightened.",
    stats: { STR: 12, DEX: 10, CON: 18, INT: 15, WIS: 17, CHA: 16 },
  },
  {
    id: "7",
    name: "Commander Thorne",
    role: "Dread-Knight",
    disposition: "Sever",
    trait: "His presence chills the air by 20 degrees.",
    quirk: "Refuses to remove his helmet, even while eating.",
    description:
      "A ghost bound to a suit of black plate armor. He serves a kingdom that turned to dust a thousand years ago.",
    stats: { STR: 19, DEX: 12, CON: 15, INT: 11, WIS: 13, CHA: 18 },
  },
  {
    id: "8",
    name: "Pip the Unlucky",
    role: "Chrono-Thief",
    disposition: "Anxious",
    trait: "Accidentally steals 'minutes' from others.",
    quirk: "Checks his pocket watch every thirty seconds.",
    description:
      "A small man who found a broken hourglass that tethered him to the present. He is always five minutes late to his own life.",
    stats: { STR: 7, DEX: 18, CON: 9, INT: 13, WIS: 8, CHA: 15 },
  },
  {
    id: "9",
    name: "Elara Frostbound",
    role: "Cryo-Elementalist",
    disposition: "Aloof",
    trait: "Freezes water just by standing near it.",
    quirk: "Never wears shoes, regardless of the terrain.",
    description:
      "Born in the Heart of Winter, Elara seeks a flame that cannot be extinguished. Her skin is cold to the touch but her temper is volcanic.",
    stats: { STR: 9, DEX: 13, CON: 14, INT: 18, WIS: 15, CHA: 11 },
  },
  {
    id: "10",
    name: "Baron von Gear",
    role: "Clockwork-Noble",
    disposition: "Pompous",
    trait: "Internal gears hum louder when he's angry.",
    quirk: "Corrects everyone's grammar mid-battle.",
    description:
      "A man who replaced his failing heart with a steam-powered turbine. He believes flesh is a design flaw.",
    stats: { STR: 15, DEX: 10, CON: 16, INT: 17, WIS: 11, CHA: 14 },
  },
  {
    id: "11",
    name: "Nyx the Silent",
    role: "Shadow-Assassin",
    disposition: "Merciless",
    trait: "Produces no sound, even when sprinting.",
    quirk: "Communicates solely through complex hand signals.",
    description:
      "A mute killer who was raised in the Tombs of Silence. She views life as a noise that needs to be silenced.",
    stats: { STR: 11, DEX: 20, CON: 13, INT: 12, WIS: 15, CHA: 7 },
  },
  {
    id: "12",
    name: "Grogon the Cook",
    role: "Battle-Chef",
    disposition: "Jovial",
    trait: "Can make a feast out of monster parts.",
    quirk: "Wears a ladle on his belt like a dagger.",
    description:
      "An ogre with a refined palate. He believes the best way to defeat an enemy is to invite them to dinner—and then eat them.",
    stats: { STR: 20, DEX: 9, CON: 18, INT: 8, WIS: 14, CHA: 16 },
  },
  {
    id: "13",
    name: "Vespera",
    role: "Night-Witch",
    disposition: "Seductive",
    trait: "Can transform into a cloud of bats.",
    quirk: "Loves the smell of old parchment and jasmine.",
    description:
      "A mistress of the dark arts who resides in a castle that only appears during a new moon.",
    stats: { STR: 10, DEX: 16, CON: 12, INT: 17, WIS: 14, CHA: 19 },
  },
  {
    id: "14",
    name: "Krog Hammerfist",
    role: "Earth-Breaker",
    disposition: "Blunt",
    trait: "Cracks the ground with every footstep.",
    quirk: "Talks to his hammer as if it were his brother.",
    description:
      "A mountain-born warrior who believes diplomacy is just a fancy word for 'not hitting hard enough'.",
    stats: { STR: 19, DEX: 7, CON: 19, INT: 6, WIS: 10, CHA: 11 },
  },
  {
    id: "15",
    name: "Zinnia Sunheart",
    role: "Solar-Paladin",
    disposition: "Radiant",
    trait: "Glows with the intensity of the noon sun.",
    quirk: "Can't stand to be in a room with no windows.",
    description:
      "A holy warrior who draws her power directly from the sun. She is literally too bright for her own good.",
    stats: { STR: 16, DEX: 11, CON: 17, INT: 10, WIS: 14, CHA: 18 },
  },
  {
    id: "16",
    name: "Silas the Scribe",
    role: "Lore-Keeper",
    disposition: "Studious",
    trait: "Has memorized every book he's ever touched.",
    quirk: "Ink stains on his fingers that never wash off.",
    description:
      "The librarian of the Infinite Library. He knows how the world ends, but he promised not to spoil it.",
    stats: { STR: 5, DEX: 10, CON: 8, INT: 20, WIS: 18, CHA: 12 },
  },
  {
    id: "17",
    name: "Raven of the Wastes",
    role: "Scavenger-King",
    disposition: "Cunning",
    trait: "Can find water in a barren desert.",
    quirk: "Always keeps a shiny pebble in his mouth.",
    description:
      "The leader of the nomadic clans that roam the Ash Plains. He treats junk like treasure and treasure like junk.",
    stats: { STR: 13, DEX: 17, CON: 15, INT: 14, WIS: 16, CHA: 10 },
  },
  {
    id: "18",
    name: "Oryx the Blind",
    role: "Spirit-Walker",
    disposition: "Wise",
    trait: "Sees through the eyes of nearby birds.",
    quirk: "Refers to himself in the third person.",
    description:
      "A monk who gave up his sight to see the flow of Aether. He navigates the world by listening to the heartbeat of the earth.",
    stats: { STR: 9, DEX: 12, CON: 14, INT: 13, WIS: 20, CHA: 11 },
  },
  {
    id: "19",
    name: "Tessa the Tinkerer",
    role: "Gadgeteer",
    disposition: "Hyperactive",
    trait: "Always has a tool for the specific job.",
    quirk: "Talks at 2x speed when excited about gears.",
    description:
      "A young genius who built her own mechanical arm. She believes there is no problem that cannot be solved with a bigger wrench.",
    stats: { STR: 10, DEX: 18, CON: 12, INT: 18, WIS: 9, CHA: 15 },
  },
  {
    id: "20",
    name: "Malakor the Vile",
    role: "Necro-Lord",
    disposition: "Arrogant",
    trait: "Summons skeletal servants with a snap of his fingers.",
    quirk: "Humming lullabies to his undead minions.",
    description:
      "A dark wizard who seeks to bridge the gap between life and death. He's actually quite lonely, which is why he makes his own friends.",
    stats: { STR: 12, DEX: 11, CON: 14, INT: 19, WIS: 15, CHA: 17 },
  },
];
