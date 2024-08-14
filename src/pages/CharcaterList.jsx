import { Link } from "react-router-dom";
import useCharcters from "../useCharcters";

export default function CharcaterList() {
  const { data, error, loading } = useCharcters(4);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="characterList">
      {data.characters.results.map(({ id, name, image }) => (
        <Link to={`/${id}`} key={id}>
          <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
