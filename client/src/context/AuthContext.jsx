import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#111827",
              color: "#fff",
              border: "1px solid #374151",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);