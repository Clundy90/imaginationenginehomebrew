import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"; // Note: You can drop the .jsx extension here

/**
 * We use the '!' non-null assertion operator here because we know
 * the 'root' div exists in our index.html.
 */
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error("Failed to find the root element. Check your index.html.");
}
