import "./file.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const File = ({ title, addToDownloadedFiles }) => {
  function handleDownload() {
    addToDownloadedFiles(title);
    toast("File " + title + " Downloaded!");
  }
  return (
    <>
      <ToastContainer />

      <div className="file">
        <div className="imagePreview">
          <img src="/pdf.png" alt="pdf icon" height={"80px"} />
        </div>
        <div className="namePreview">
          <span>{title}</span>
          <FontAwesomeIcon
            icon={faDownload}
            className="download"
            onClick={handleDownload}
          />
        </div>
      </div>
    </>
  );
};

export default File;
