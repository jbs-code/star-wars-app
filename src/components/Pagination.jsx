import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Pagination({ currentPage, setCurrentPage, nextUrl, previousUrl }) {
  const [isLoading, setIsLoading] = useState(false);

  const next = nextUrl?.split(/page=/i)[1] ?? null;
  const previous = previousUrl?.split(/page=/i)[1] ?? null;

  useEffect(() => {
    setIsLoading(false);
  }, [next, previous]);

  const handlePrevious = () => {
    if (previous === null) return;
    setCurrentPage(Number(previous));
    setIsLoading(true);
  };

  const handleNext = () => {
    if (next === null) return;
    setCurrentPage(Number(next));
    setIsLoading(true);
  };

  return isLoading ? (
    <div className="flex items-center mt-4 mb-3">
      <h1 className="font-semibold">Loading...</h1>
    </div>
  ) : (
    <div className="flex items-center mt-4">
      <button
        onClick={handlePrevious}
        className="border-2 border-solid border-blue-600 rounded p-1 w-24"
      >
        previous
      </button>
      <i className="ml-2 mr-2">{currentPage}</i>
      <button
        onClick={handleNext}
        className="border-2 border-solid border-blue-600 rounded p-1 w-24"
      >
        next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  nextUrl: PropTypes.any,
  previousUrl: PropTypes.any,
};

export default Pagination;
