import { gql, useQuery } from "@apollo/client";

const Get_charcter = gql`
  query getCharacter($id: ID!) {
   
      character(id: $id) {
        name
        id
        image
        episode {
          name
          episode
        }
      
    }
  }
`;

const useCharcter = (id) => {
  console.log(id);
  const { data, loading, error } = useQuery(Get_charcter, {
    variables: { id },
  });
  return { data, loading, error };
};

export default useCharcter;
