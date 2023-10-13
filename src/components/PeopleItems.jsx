import PropTypes from "prop-types";

function PeopleItems({ people = {}, setPeopleItem }) {
  const handleItem = ({ target }) => {
    const characterName = target.innerText.split("➛")[1].trim();
    const peopleData = people.results?.find((c) => (c.name === characterName));
    setPeopleItem(peopleData);
  };
  return (
    <ul>
      {people.results &&
        people.results.map((character) => (
          <li
            onClick={handleItem}
            className="cursor-pointer mb-1 w-max"
            key={character.created}
          >
            ➛ {character.name}
          </li>
        ))}
    </ul>
  );
}

PeopleItems.propTypes = {
  people: PropTypes.object,
  setPeopleItem: PropTypes.func,
};

export default PeopleItems;
