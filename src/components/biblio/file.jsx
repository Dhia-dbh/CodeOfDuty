import "./file.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const File = ({ title }) => {
  return (
    <>
      <div className="file">
        <div className="imagePreview">
          <img src="/pdf.png" alt="pdf icon" height={"80px"} />
        </div>
        <div className="namePreview">
          <span>{title}</span>
          <FontAwesomeIcon icon={faDownload} className="download" />
        </div>
      </div>
    </>
  );
};

export default File;
