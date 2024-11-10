import EventApp from "./components/EventApp";
import Home from "./pages/Home";
import {Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restricted" element={<EventApp />} />
          <Route path="/community" element={<EventApp />} />
          <Route path="/my" element={<EventApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
