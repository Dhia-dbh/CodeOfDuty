import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import Biblio from "./components/biblio/biblio";
import AiSection from "./components/aiSection/aiSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/biblio" Component={Biblio} />
      </Routes>
    </>
  );
}

export default App;
