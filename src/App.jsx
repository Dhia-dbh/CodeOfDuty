import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import AiSection from "./components/aiSection/aiSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/biblio" Component={AiSection} />
      </Routes>
    </>
  );
}

export default App;
