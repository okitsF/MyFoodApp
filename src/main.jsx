import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <SkeletonTheme baseColor="#E6E2D9" highlightColor="#DAD6C7" >
        <App />
      </SkeletonTheme>
    </AppProvider>
  </StrictMode>
);

//