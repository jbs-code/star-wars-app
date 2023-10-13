import { useEffect, useState } from "react";
import { getImageByName } from "../helpers/getData";
import PropTypes from "prop-types";

function PeopleGif({ name }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    (async () => {
      setImageUrl(await getImageByName(name));
    })();
  }, [name]);

  return (
    <picture className="w-52">
      <img src={imageUrl} alt={`Imagen of ${name} not found`} />
    </picture>
  );
}

PeopleGif.propTypes = {
  name: PropTypes.string,
};

export default PeopleGif;
