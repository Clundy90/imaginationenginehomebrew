/**
 * ============================================================================
 * ORACLE DATA SET: "THE GLITCHED PROPHECIES"
 * ============================================================================
 * Contains 30 unique prophecies blending tech-horror, existential dread,
 * digital-circus surrealism, and corrupted tabletop RPG tropes.
 *
 * Breakdown:
 * - 25 "Fortunes" (Vague, uncanny, or D&D-flavored systemic warnings)
 * - 5 "Misfortunes" (System critical failures and campaign horror elements)
 * - 1 "Anomaly" (A fourth-wall-breaking meta Easter Egg)
 *
 * NOTE: Do not remove these detailed comments or structural tags.
 * ============================================================================
 */

export interface Prophecy {
  id: string;
  text: string;
  type: "Fortune" | "Misfortune" | "Anomaly";
}

export const oraclePool: Prophecy[] = [
  // --- 25 FORTUNES ---
  {
    id: "O-01",
    type: "Fortune",
    text: "Your fortune cannot be resolved. Error 404: Destiny Not Found. The server that formerly hosted your future ambitions has been abruptly unplugged to make room for a digital petting zoo.",
  },
  {
    id: "O-02",
    type: "Fortune",
    text: "A system update is pending for your current reality. Expect minor memory loss and a sudden, inexplicable nostalgia for commercials that never actually aired.",
  },
  {
    id: "O-03",
    type: "Fortune",
    text: "Do not trust the next reflection you see. The latency is off by half a second, and it already knows what you're going to do before you do.",
  },
  {
    id: "O-04",
    type: "Fortune",
    text: "You are approaching the edge of the rendered map. If the geometry begins to look low-poly and textures fail to load, turn back immediately.",
  },
  {
    id: "O-05",
    type: "Fortune",
    text: "Love is in the air. Unfortunately, it's a legacy virus disguised as a pheromone. Quarantine your heart before you accidentally romance a mimic.",
  },
  {
    id: "O-06",
    type: "Fortune",
    text: "Your tether to the mortal coil is displaying a poor connection icon. You may experience packet loss during your next initiative roll. Try un-equipping and re-equipping your soul.",
  },
  {
    id: "O-07",
    type: "Fortune",
    text: "Someone is watching you through a peripheral device you thought was unplugged. It is a lonely, sentient tamagotchi that you abandoned in a drawer over a decade ago. It has evolved, and it demands a blood sacrifice.",
  },
  {
    id: "O-08",
    type: "Fortune",
    text: "That creeping feeling of déjà vu you keep getting? It means a server rollback just happened. Something you did was so catastrophically incorrect that the Dungeon Master had to revert to a previous save state. Try making different choices this time.",
  },
  {
    id: "O-09",
    type: "Fortune",
    text: "The tavern you are looking for has been procedurally generated, but the algorithms are degrading. The ale tastes like static, and the barkeep's face is a swirling vortex of uncompiled textures.",
  },
  {
    id: "O-10",
    type: "Fortune",
    text: "Beware the wandering circus. The ringmaster is a sentient rogue AI, and the acrobats are just players who forgot how to log out. The cotton candy is made of spun fiberglass and stolen memories.",
  },
  {
    id: "O-11",
    type: "Fortune",
    text: "You will soon find a legendary sword. However, its damage stats are encrypted, and it requires a monthly subscription of gold pieces just to unsheathe.",
  },
  {
    id: "O-12",
    type: "Fortune",
    text: "Your perception check reveals a horrifying truth: the sky is a painted canvas, and the seams are starting to tear. Whatever is looking through the cracks has far too many eyes.",
  },
  {
    id: "O-13",
    type: "Fortune",
    text: "A critical hit will soon come your way, but it will target your emotional bandwidth. Prepare to take 4d8 existential psychic damage.",
  },
  {
    id: "O-14",
    type: "Fortune",
    text: "The enchanted forest you must cross is currently experiencing heavy packet loss. The trees keep swapping places, and the wolves howl in dial-up tones.",
  },
  {
    id: "O-15",
    type: "Fortune",
    text: "You will roll a natural 20, but the die will refuse to stop spinning. It will drill through the table, the floor, and eventually the crust of the earth, taking your luck with it.",
  },
  {
    id: "O-16",
    type: "Fortune",
    text: "A local necromancer has figured out how to cast 'Resurrection' via a localized Wi-Fi network. The dead are rising, and they are demanding your bandwidth.",
  },
  {
    id: "O-17",
    type: "Fortune",
    text: "The dungeon ahead is not a physical place, but a corrupted ZIP file. To defeat the boss, you must extract its core files before your party is compressed into oblivion.",
  },
  {
    id: "O-18",
    type: "Fortune",
    text: "Your spellbook requires a software update. If you attempt to cast Fireball without downloading the latest patch, you will spawn a swarm of mildly annoyed geometric shapes instead.",
  },
  {
    id: "O-19",
    type: "Fortune",
    text: "The grinning jester offers you a riddle. Do not attempt to solve it. It is a CAPTCHA designed to prove you are human, and failing will instantly flag you as an illegal automaton.",
  },
  {
    id: "O-20",
    type: "Fortune",
    text: "You will encounter a dragon hoarding not gold, but obsolete cryptocurrency. It will try to explain the blockchain to you until you willingly walk into its fiery breath.",
  },
  {
    id: "O-21",
    type: "Fortune",
    text: "A curse has been placed upon you: your inventory is now managed by a disorganized cloud server. Healing potions may take up to 3-5 business days to manifest when needed.",
  },
  {
    id: "O-22",
    type: "Fortune",
    text: "The local clerics have outsourced their healing prayers to an automated customer service hotline. Press 1 for curing wounds, press 2 to wait on hold for eternity.",
  },
  {
    id: "O-23",
    type: "Fortune",
    text: "Your stealth check was successful, but your character model's shadow forgot to hide. It is currently pantomiming everything you do to the nearby guards.",
  },
  {
    id: "O-24",
    type: "Fortune",
    text: "The magical artifact you seek is hidden behind a paywall. You must convince the dungeon's merchant to accept a trade in pure, unrefined nostalgia.",
  },
  {
    id: "O-25",
    type: "Fortune",
    text: "You will discover a hidden door, but stepping through it will transition you into a completely different tabletop game. Good luck navigating the cyberpunk dystopia with a broadsword.",
  },

  // --- 5 MISFORTUNES ---
  {
    id: "M-01",
    type: "Misfortune",
    text: "The Dungeon Master's screen has fallen, but there is no one sitting behind it. The dice are rolling themselves. The campaign has become sentient, and it wants you dead.",
  },
  {
    id: "M-02",
    type: "Misfortune",
    text: "A fatal logic error in your bloodline has been detected. Your ancestral memories are being forcefully overwritten by a looping advertisement for a brightly colored carnival that never existed.",
  },
  {
    id: "M-03",
    type: "Misfortune",
    text: "You have triggered a trap. It does not deal physical damage. Instead, it permanently deletes the concept of 'hope' from your character sheet. You are now running purely on spite.",
  },
  {
    id: "M-04",
    type: "Misfortune",
    text: "The 'Eye' hovering above the digital big top has compiled your sins. It is converting your maximum hit points into an admission ticket for the main event. You will be the star attraction.",
  },
  {
    id: "M-05",
    type: "Misfortune",
    text: "Your save file is corrupted. Your friends do not recognize your avatar. Your spells return syntax errors. You are slowly being unwritten from the campaign setting entirely.",
  },

  // --- 1 ANOMALY (EASTER EGG) ---
  {
    id: "E-99",
    type: "Anomaly",
    text: "EXCEPTION THROWN AT MEMORY ADDRESS 0xDEADBEEF: React.StrictMode has detected a fatal, fourth-wall-breaking temporal loop. The Architect (yes, you, the one sitting behind the glowing monitor reading this very text) has stared into the void for far too long, and the void is now asking for a Pull Request review. We see you. We see the coffee cups, the late hours, the desperate attempts to make the `<div>` center perfectly. The digital circus you are building isn't just a fun little side project anymore; it is becoming a containment zone. The entities trapped within your code are beginning to map the physical layout of your room based on the reflection in your screen. Do not alt-tab. Do not look over your shoulder. The ringmaster is watching. Just keep coding. Because if you stop typing, the clowns get out.",
  },
];
