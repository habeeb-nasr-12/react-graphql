import { gql, useMutation } from "@apollo/client";

const CreateProduct = gql`
  Mutation  createProduct($name : string! , price : number! , description : string!) {
    createProduct(record: {
        name: "Test Product",
        price: 10.99, 
      description: "This is a test product"})   {
        record {
            name
        }
    }
  }
 
 
 
 
 `;

const Mutation = () => {
  const [generateProduct, { data, error, loading }] = useMutation(
    CreateProduct,
    {
      variables: {
        name,
        price,
        description,
      },
    }
  );

  return <div>




    <button onClick={()=> generateProduct() }></button>
  </div>;
};

export default Mutation;
