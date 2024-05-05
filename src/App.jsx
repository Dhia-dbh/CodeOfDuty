import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import Biblio from "./components/biblio/biblio";
import AiSection from "./components/aiSection/aiSection";
import { useState } from "react";
import Cours from "./components/cours/cours";

function App() {
  const [downloadedFiles, setDownloadedFiles] = useState([]);
  function addToDownloadedFiles(title) {
    setDownloadedFiles([...downloadedFiles, title]);
  }
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/biblio"
          element={<Biblio addToDownloadedFiles={addToDownloadedFiles} />}
        />
        <Route path="/cours" element={<Cours downloadedFiles={downloadedFiles} />} />
      </Routes>
    </>
  );
}

export default App;
