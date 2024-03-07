import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/sass/reset.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "./utils/ErrorFallBack.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
