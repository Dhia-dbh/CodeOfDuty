import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import Biblio from "./components/biblio/biblio";
import AiSection from "./components/aiSection/aiSection";
import Cours from "./components/cours/Cours";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/biblio" Component={Biblio} />
        <Route path="/cours" Component={Cours} />
      </Routes>
    </>
  );
}

export default App;
