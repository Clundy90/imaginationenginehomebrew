export interface WorldLocation {
  id: string;
  name: string;
  biome: string;
  weather: string;
  threatLevel: number;
  magicPrevalence: string; // Standard D&D-style labels
  religiousInfluence: string; // Clear social structure
  description: string;
}

export const worldPool: WorldLocation[] = [
  {
    id: "w1",
    name: "The Sun-Drenched Canyons",
    biome: "High Desert",
    weather: "Heat Waves",
    threatLevel: 3,
    magicPrevalence: "Low Magic",
    religiousInfluence: "Theocracy (Sun Worship)",
    description:
      "A vast, golden canyon where the sun never truly sets. The locals live in cliff-side monasteries and believe that staying in the light is the only way to keep their souls pure. Magic is rare and viewed as a divine gift reserved for the high priests.",
  },
  {
    id: "w2",
    name: "Iron-Port City",
    biome: "Coastal Industrial",
    weather: "Heavy Smog",
    threatLevel: 5,
    magicPrevalence: "Common (Arcane-Tech)",
    religiousInfluence: "Secular (Merchant Guilds)",
    description:
      "A bustling, soot-covered port where steam-engines and magic crystals work in tandem. The city is ruled by wealthy trade lords who care more about gold than gods. Every street corner has a shop selling minor charms or clockwork gadgets.",
  },
  {
    id: "w3",
    name: "The Whispering Woods",
    biome: "Ancient Forest",
    weather: "Thick Mist",
    threatLevel: 6,
    magicPrevalence: "Wild Magic",
    religiousInfluence: "Druidic Circles",
    description:
      "A dense, emerald forest where the trees actually move when you aren't looking. The air is thick with raw, untamed energy that makes spells unpredictable. Local druids protect the 'Heart-Tree' and treat outsiders with cold suspicion.",
  },
  {
    id: "w4",
    name: "The Shadowed Peaks",
    biome: "Alpine Mountains",
    weather: "Blizzards",
    threatLevel: 8,
    magicPrevalence: "High Magic (Dark)",
    religiousInfluence: "Cultist Presence",
    description:
      "Jagged, black mountains that pierce the sky. Ancient towers of necromancers dot the ridges, casting long shadows over the valleys below. It is a place of ritual and sacrifice, where the gods are whispered to be dead or imprisoned.",
  },
  {
    id: "w5",
    name: "The Endless Steppes",
    biome: "Grassy Plains",
    weather: "Clear Skies",
    threatLevel: 2,
    magicPrevalence: "Rare/Hidden",
    religiousInfluence: "Ancestral Spirits",
    description:
      "A peaceful sea of grass stretching to the horizon. The nomadic tribes here don't use scrolls or wands; they speak to the spirits of their ancestors through smoke and song. It is a grounded, simple land where tradition is law.",
  },
  {
    id: "w6",
    name: "The Ashlands",
    biome: "Volcanic Barrens",
    weather: "Ash Storms",
    threatLevel: 9,
    magicPrevalence: "Tainted/Corrupted",
    religiousInfluence: "Fanatical Zealots",
    description:
      "A scorched wasteland where the ground is literal obsidian. Fire giants and elementals roam freely. The survivors are fanatical zealots who believe the world is being 'purified' by the flames and welcome the destruction.",
  },
  {
    id: "w7",
    name: "The Sunken Kingdom",
    biome: "Flooded Ruins",
    weather: "Tropical Rain",
    threatLevel: 7,
    magicPrevalence: "Ancient/Lost",
    religiousInfluence: "Forgotten Gods",
    description:
      "The tops of marble palaces poke out from a massive, turquoise lake. Once a center of learning, it is now a maze of half-submerged ruins filled with water-logged traps and the vengeful spirits of those who drowned.",
  },
  {
    id: "w8",
    name: "The Clockwork Citadel",
    biome: "Mechanical City",
    weather: "Static Storms",
    threatLevel: 4,
    magicPrevalence: "Strictly Regulated",
    religiousInfluence: "The Order of Logic",
    description:
      "A city built entirely of brass and silver gears. Every citizen has a pre-determined role, and 'unlicensed' magic is a crime punishable by exile. The 'Order of Logic' maintains the city-wide engine that powers the world's most accurate clocks.",
  },
  {
    id: "w9",
    name: "The Bone-Coast",
    biome: "Pale Cliffs",
    weather: "Salt Spray",
    threatLevel: 6,
    magicPrevalence: "Medium Magic",
    religiousInfluence: "Sea-God Pantheon",
    description:
      "White cliffs made of compressed ancient bones overlooking a churning gray sea. Shipwrecks are common here, and the locals spend their days scavenging the 'gifts' the ocean brings in, offering a portion back to the fickle gods of the tide.",
  },
  {
    id: "w10",
    name: "The Floating Gardens",
    biome: "Skyland Archipelago",
    weather: "Gentle Gales",
    threatLevel: 3,
    magicPrevalence: "Innate/Natural",
    religiousInfluence: "Nature Worship",
    description:
      "Dozens of small islands floating in a sea of clouds. Gravity is weak here, and the plants grow to enormous sizes. It is a sanctuary for rare birds and those seeking a life of quiet meditation away from the wars of the surface.",
  },
  {
    id: "w11",
    name: "The Gilded Empire",
    biome: "Lush Valleys",
    weather: "Golden Hour",
    threatLevel: 5,
    magicPrevalence: "High Magic (Divine)",
    religiousInfluence: "State Religion",
    description:
      "A wealthy empire where the walls are plated in gold and the streets are paved with marble. Magic is used for everything from street lighting to cooking. The Emperor is seen as a living god, and his word is absolute truth.",
  },
  {
    id: "w12",
    name: "The Dead Marshes",
    biome: "Stagnant Swamp",
    weather: "Toxic Fog",
    threatLevel: 8,
    magicPrevalence: "Dead Magic Zone",
    religiousInfluence: "Atheistic/Survivalist",
    description:
      "A foul-smelling bog where magic simply fails to work. Spells fizzle out and potions turn to bitter water. Only the most desperate outcasts live here, surviving on tough roots and avoiding the monstrosities that thrive in the muck.",
  },
  {
    id: "w13",
    name: "The Sky-Forge Peak",
    biome: "Volcanic Mountain",
    weather: "Lightning Storms",
    threatLevel: 7,
    magicPrevalence: "Artificing/Enchantment",
    religiousInfluence: "The Great Smithy",
    description:
      "A mountain that is constantly struck by lightning. Dwarven master-smiths use the natural electricity to forge legendary weapons. They view the forge itself as a sacred entity and offer steel and blood to keep the fires burning.",
  },
  {
    id: "w14",
    name: "The Eternal Library",
    biome: "Endless Halls",
    weather: "Dusty Air",
    threatLevel: 1,
    magicPrevalence: "Pure Arcane",
    religiousInfluence: "Knowledge-Based Hierarchy",
    description:
      "A world that is nothing but a single, infinite building filled with books. There is no sun, only magical lamps. The scholars who live here trade secrets for food and haven't seen the 'outside' in generations.",
  },
  {
    id: "w15",
    name: "The Crimson Savannah",
    biome: "Red Grasslands",
    weather: "Dust Devils",
    threatLevel: 6,
    magicPrevalence: "Primal/Blood",
    religiousInfluence: "Shamanic Tribes",
    description:
      "Vast plains of blood-red grass where predators are camouflaged perfectly. The tribes here believe that every kill honors the earth, and they use bone-runes to channel the strength of the beasts they hunt.",
  },
  {
    id: "w16",
    name: "The Crystal Caves",
    biome: "Subterranean",
    weather: "Dripping Water",
    threatLevel: 5,
    magicPrevalence: "Radiant Energy",
    religiousInfluence: "None (Scientific)",
    description:
      "Deep underground, where giant glowing crystals provide light and heat. A group of exiled mages has set up a laboratory here, studying how to extract the raw energy from the earth to power a new age of discovery.",
  },
  {
    id: "w17",
    name: "The Walled Oasis",
    biome: "Desert Sanctuary",
    weather: "Sandstorms (Outside)",
    threatLevel: 4,
    magicPrevalence: "Low Magic (Defensive)",
    religiousInfluence: "Egalitarian Council",
    description:
      "A lush, green paradise protected by massive stone walls from the surrounding desert. It is a melting pot of different races who have put aside their differences to survive the harsh environment and the raiders outside.",
  },
  {
    id: "w18",
    name: "The Storm-Tossed Isles",
    biome: "Rocky Coastline",
    weather: "Hurricane Winds",
    threatLevel: 7,
    magicPrevalence: "Weather-Based",
    religiousInfluence: "Storm-Lord Cult",
    description:
      "A collection of jagged rocks where the wind never stops howling. The inhabitants are hardy sailors who believe that the louder they shout, the more the Storm-Lord will respect them. Magic is used primarily to keep ships from splintering.",
  },
  {
    id: "w19",
    name: "The Shadow-Fell Moors",
    biome: "Mist-Covered Hills",
    weather: "Eerie Silence",
    threatLevel: 8,
    magicPrevalence: "Necromantic",
    religiousInfluence: "The Grey Lady",
    description:
      "Gray, rolling hills where the veil between life and death is thin. Ghosts are a common sight, and the 'Grey Lady' is said to lead the souls of the departed to the next world. It is a somber place where nobody speaks above a whisper.",
  },
  {
    id: "w20",
    name: "The Architect’s Study",
    biome: "Transdimensional Library",
    weather: "Stardust Drift",
    threatLevel: 10,
    magicPrevalence: "Absolute Admin Access",
    religiousInfluence: "The Order of the Code",
    description:
      "The true heart of the Imagination Engine. Floating above a sea of stars, you see the 'blueprints' for every world you've ever forged. Parchment scrolls auto-write themselves in the air, detailing the stats of NPCs before they are even born. It is the place where the Creator (Chelsea) fine-tunes reality. It is peaceful, quiet, and smells faintly of old books and fresh ink.",
  },
];
