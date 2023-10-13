import { useState } from "react";
import Search from "./Search";
import PeopleGif from "./PeopleGif";

function PeopleScreen() {
  const [peopleItem, setPeopleItem] = useState({
    name: "",
    gender: "",
    birth_year: "",
  });

  return (
    <main className="w-5/6 flex m-auto">
      <aside className="w-1/3 flex flex-col flex-wrap items-center">
        <Search setPeopleItem={setPeopleItem} />
      </aside>
      <div className="flex justify-center items-center border border-solid border-gray-500 shadow-md shadow-black w-2/3">
        {peopleItem.name !== "" && (
          <>
            <article className="text-center mr-5">
              <h1 className="font-semibold text-xl">{peopleItem.name}</h1>
              <p>Gender: {peopleItem.gender}</p>
              <p>Birth Year: {peopleItem.birth_year}</p>
            </article>
            <PeopleGif name={peopleItem.name} />
          </>
        )}
      </div>
    </main>
  );
}

export default PeopleScreen;
