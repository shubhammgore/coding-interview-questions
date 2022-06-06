import { createRoot } from "react-dom/client";
import { ContextProvider } from "./store/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
