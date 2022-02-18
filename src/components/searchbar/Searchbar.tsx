import { SearchIcon, SearchInput, SearchWrapper } from "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = (): JSX.Element => (
  <SearchWrapper>
    <SearchIcon>
      <FontAwesomeIcon icon={faSearch} />
    </SearchIcon>
    <SearchInput type="text" placeholder="Search for..."></SearchInput>
  </SearchWrapper>
);

export default Searchbar;
