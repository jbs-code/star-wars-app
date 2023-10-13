import { useCallback, useEffect, useState } from "react";
import { getAllPeople, getPeopleByName } from "../helpers/getData";
import Pagination from "./Pagination";
import PeopleItems from "./PeopleItems";
import PropTypes from "prop-types";

function Search({setPeopleItem }) {
  const [inputValue, setInputValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [people, setPeople] = useState({});
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const useSearch = useCallback(async () => {
    const data =
      currentValue === ""
        ? await getAllPeople(currentPage)
        : await getPeopleByName(currentValue, currentPage);
    setPeople(data);
    setPrevious(data.previous);
    setNext(data.next);
  }, [currentPage, currentValue]);

  useEffect(() => {
    const Search = async () => {
      await useSearch();
    };

    Search();
  }, [useSearch]);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setCurrentValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          className="border border-solid border-gray-500 rounded mb-4 mt-2 p-1"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit" className="p-1 ml-1">
          🔍︎
        </button>
      </form>
      <div>
        <PeopleItems people={people} setPeopleItem={setPeopleItem}/>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nextUrl={next}
          previousUrl={previous}
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  setPeopleItem: PropTypes.func,
};

export default Search;
