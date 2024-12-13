import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarterPage from "./starterpage.tsx";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Starter page before login */}
        <Route path="/" element={<StarterPage />} />
        
        {/* Main app page after authentication */}
        <Route
          path="/app"
          element={
            <Authenticator>
              <App />
            </Authenticator>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);