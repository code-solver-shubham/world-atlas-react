

import { FaSearch } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <section className="section-searchFilter container">
      
      {/* SEARCH */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER */}
      <div className="filter-box">
        <MdFilterList className="filter-icon" />
        <select
          className="select-section"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

    </section>
  );
};

export default SearchFilter;