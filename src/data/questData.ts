export interface QuestTemplate {
  hooks: string[];
  objectives: string[];
  pressures: string[];
  twists: string[];
}

export const questPool: QuestTemplate = {
  hooks: [
    "A frantic stablehand claims the horses are speaking in binary and demanding a sacrifice.",
    "The tavern’s cellar door explodes; a knight crawls out gasping about a 'Reality Leak'.",
    "Every candle flickers purple; the shadows of the patrons detach and start 'defragmenting'.",
    "A magistrate offers 1,000gp to anyone who can survive an hour in the 'Glitching' clocktower.",
    "Static fills the air as a local merchant 'lags', repeating the same three seconds of life.",
    "The 'Menu' of reality briefly appears in the sky, showing a 99% 'World Corruption' warning.",
    "A black-and-purple 'Missing Texture' void opens in the town square, swallowing sound.",
    "A messenger arrives, but they are flickering physically between three different ages.",
    "The tavern's ale glows with 'Syntax Error' messages floating in the foam.",
    "A scroll arrives that is actually a binary-coded parchment that speaks directly to the mind.",
  ],
  objectives: [
    "Shatter the 'Ever-Wailing' Stone before its audio loop deafens the entire valley.",
    "Hunt the Rogue Chronomancer who has frozen the town’s children in a 'Loading Loop'.",
    "Seal the rift in the cemetery before the 'Ghost-Tide' overwrites the living world.",
    "Retrieve the Heart of the Mountain from a dragon corrupted by 'Void-Ink' code.",
    "Reboot the 'World Seed' at the center of the planar server to restore physics.",
    "Delete a 'Corrupt Sprite' entity that is eating the memories of the local elders.",
    "Find the 'Source Code' of a dying god before it's overwritten by a Void Virus.",
    "Patch a reality rift that is leaking unrefined, raw mana into the village streets.",
    "Escort a 'Glitch-Cat' to the world's edge to reset the local gravity parameters.",
    "Extract a 'System Admin'—an ancient Sphinx—trapped in a logic loop of its own riddles.",
  ],
  pressures: [
    "The Blood Moon is rising; in 4 hours, the ritual becomes 'Hard-Coded' into reality.",
    "The tavern is surrounded by an impenetrable mist that is shrinking at 10fps.",
    "The party has been poisoned; the 'Antidote.exe' is held by the final target.",
    "A celestial alignment is 2 hours away—if failed, the current plane will be 'Deleted'.",
    "The 'Blue Screen of Death' is sweeping the horizon, erasing everything it touches.",
    "Memory usage is at 99%; if it hits 100, the party's identities will be wiped.",
    "The 'Garbage Collector' entity is arriving in 3 hours to purge 'outdated' lifeforms.",
    "A countdown timer is literally burning into the party's retinas, ticking toward zero.",
    "The frame rate of reality is dropping; if it hits 0, the world freezes forever.",
    "The world's 'Save File' is corrupted; you must finish before the next auto-save attempt.",
  ],
  twists: [
    "The 'villain' was actually a guardian keeping a much worse 'Legacy Bug' locked away.",
    "The 'Relic' you are sent to save is actually a sentient bomb designed to 'Format' the city.",
    "The tavern regulars are all 'Low-Res' illusions cast by the very creature you're hunting.",
    "The real threat is currently sitting in the party's favorite booth back at the tavern.",
    "The party realizes they are 'NPCs' who gained sentience during a system crash.",
    "The quest giver is actually a version of the party from a previous 'Save File'.",
    "The entire world is actually a simulation running inside a larger Bag of Holding.",
    "The enemy is a 'Logic Bug' that cannot be killed, only 'commented out' of existence.",
    "The tavern you started in was 'Patched Out' of the world while you were away.",
    "Success means the world resets, and no one will remember the party's heroism.",
  ],
};
