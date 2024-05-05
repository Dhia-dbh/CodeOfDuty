import "./searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <>
      <div className="searchBar">
        <input type="text" />
        <icon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </icon>
      </div>
    </>
  );
};

export default SearchBar;
