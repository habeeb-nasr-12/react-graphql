import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharcters = () => {
  const { data , loading, error } = useQuery(GET_CHARACTERS);
  return { data, loading, error };
};

export default useCharcters;
