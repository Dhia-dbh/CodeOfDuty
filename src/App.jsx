import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import Biblio from "./components/biblio/biblio";
import AiSection from "./components/aiSection/aiSection";
import { useState } from "react";

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
      </Routes>
    </>
  );
}

export default App;
