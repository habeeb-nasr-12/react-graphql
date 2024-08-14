import React from "react";
import { useParams } from "react-router";
import useCharcter from "../useCharcter";

const Charcter = () => {
  const { id } = useParams();

  const { data, loading, error } = useCharcter(id);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="charchter ">
      <img src={data?.character?.image} height={750} width={750} alt="" />

      <div className="charchter-content">
        <h1>{data?.character?.name}</h1>
        <h1>{data?.character?.gender}</h1>

        <div className="charchter-episode">
          {data?.character?.episode.map((episode) => (
            <div key={episode?.name}>
              <p>
                {episode?.name} - {episode?.episode}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charcter;
