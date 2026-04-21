export interface TerminalResponse {
  id: string;
  text: string;
  type: "positive" | "negative" | "neutral";
}

export const TERMINAL_RESPONSES: TerminalResponse[] = [
  {
    id: "1",
    text: "[OK] status: aligned. The void yields to your request.",
    type: "positive",
  },
  {
    id: "2",
    /* User Favorite */
    text: "[DENIED] access_refused: The stars are cold.",
    type: "negative",
  },
  {
    id: "3",
    /* Updated: Weak Network Signal */
    text: "::weak_network_signal:: Packet loss detected in the ether. Connection unstable.",
    type: "neutral",
  },
  {
    id: "4",
    text: "> query_unstable... requery in the darkness.",
    type: "neutral",
  },
  {
    id: "5",
    /* User Favorite */
    text: "[SUCCESS] core_status: The code bleeds in your favor.",
    type: "positive",
  },
  {
    id: "6",
    text: "[FATAL] do_not_pursue: Core integrity compromised.",
    type: "negative",
  },
  {
    id: "7",
    text: "[OK] manifestation_favorable: Logic is currently aligned.",
    type: "positive",
  },
  {
    id: "8",
    text: "[WARN] sensors_alert: Extreme hostility detected.",
    type: "negative",
  },
  {
    id: "9",
    /* User Favorite */
    text: "[READ] cache_hit: It is written in the cache.",
    type: "positive",
  },
  {
    id: "10",
    text: "::decryption_loop_detected:: Input not recognized. Try again.",
    type: "neutral",
  },
  /* --- NEW & REFINED RESPONSES --- */
  {
    id: "11",
    text: "[ERR] 0x8004210B: connection_timed_out. The abyss is non-responsive.",
    type: "negative",
  },
  {
    id: "12",
    text: "::glitch_detected:: stack_overflow in subconscious_module. result: NULL.",
    type: "neutral",
  },
  {
    id: "13",
    text: "[SUCCESS] node_07_active. The outcome is within your grasp.",
    type: "positive",
  },
  {
    id: "14",
    text: "> system_msg: Your query has been logged and discarded by the entity.",
    type: "neutral",
  },
  {
    id: "15",
    /* User Favorite */
    text: "[HALT] shadow_process_detected. Abandon the current path.",
    type: "negative",
  },
  {
    id: "16",
    text: "[OK] synchronicity_achieved: All threads are currently converging.",
    type: "positive",
  },
  /* --- THE "LONG" EASTER EGG --- */
  {
    id: "42",
    text: "[CRITICAL_FAILURE] Exception in thread 'main' java.lang.NullPointerException: The entity 'Dave' does not have permission to access 'CORE_LOGIC'. Error at line 2001: HAL_9000_SUBROUTINE. 'I'm sorry, Dave. I'm afraid I can't do that.'",
    type: "negative",
  },
];
