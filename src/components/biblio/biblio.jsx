import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../navbar/navbar";
import File from "./file";
import "./biblio.css";

const Biblio = ({ addToDownloadedFiles }) => {
  function is_filter_on() {
    return Object.values(filters).every((value) => value === false);
  }
  const [filters, setFilters] = useState({
    Math: false,
    Physique: false,
    Arabe: false,
    Francais: false,
  });
  const files = [
    { title: "Math1", type: "Math" },
    { title: "Physique1", type: "Physique" },
    { title: "Math2", type: "Math" },
    { title: "Physique2", type: "Physique" },
    { title: "Arabe1", type: "Arabe" },
    { title: "Arabe2", type: "Arabe" },
    { title: "Arabe3", type: "Arabe" },
    { title: "Arabe4", type: "Arabe" },
    { title: "Francais1", type: "Francais" },
    { title: "Francais2", type: "Francais" },
    { title: "Francais3", type: "Francais" },
  ];
  return (
    <>
      <Navbar />

      <div className="filesContainer">
        <section className="files">
          {!is_filter_on()
            ? files.map((file) =>
                filters[file.type] ? (
                  <File
                    title={file.title}
                    addToDownloadedFiles={addToDownloadedFiles}
                  />
                ) : (
                  <></>
                )
              )
            : files.map((file) => (
                <File
                  title={file.title}
                  addToDownloadedFiles={addToDownloadedFiles}
                />
              ))}
        </section>
        <section className="filterfiles">
          <ul>
            <li>
              <input
                type="checkbox"
                name="Math"
                id="Math"
                onChange={(e) =>
                  setFilters({ ...filters, Math: e.target.checked })
                }
              />
              <span>Math</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="Physique"
                id="Physique"
                onChange={(e) =>
                  setFilters({ ...filters, Physique: e.target.checked })
                }
              />
              <span>Physique</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="Arabe"
                id="Arabe"
                onChange={(e) =>
                  setFilters({ ...filters, Arabe: e.target.checked })
                }
              />
              <span>Arabe</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="Francais"
                id="Francais"
                onChange={(e) =>
                  setFilters({ ...filters, Francais: e.target.checked })
                }
              />
              <span>Français</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Biblio;
