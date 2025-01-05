import React from "react";
import ReactDOM from "react-dom/client"; // Notez l'import depuis react-dom/client
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./pages/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <p>use this to navigate:</p>
        <Router>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="*" element={<Error/>} />
                <Route path="/results" element={<Results/>} />
                <Route path="freelances" element={<Freelances/>} />
            </Routes>
        </Router>
    </React.StrictMode>
);
