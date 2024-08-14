import { gql, useLazyQuery } from "@apollo/client";
import React, { useRef, useState } from "react";

const Get_Locations = gql`
  query getCharacterLocation($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const name = useRef(null);
  const [getlocations, { loading, error, data, called }] = useLazyQuery(
    Get_Locations,
    {
      variables: { name: name?.current?.value },
    }
  );
  

  return (
    <div>
      <input ref={name} />
      <button onClick={() => getlocations()}>search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data &&
        data.characters.results.map(({location},idx) => (
          <p key={idx}>{location?.name}</p>
        ))}
    </div>
  );
};

export default Search;
