import { useEffect, useState } from "react";
import axios from "axios";

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
      setEpisodes(res.data.results);
    });
  }, []);
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">EpisodePage</h1>
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <ul>
              <li>
                Эпизод: <strong>{episodes.length && episode.episode}</strong>
              </li>
              <li>
                Название эпизода:{" "}
                <strong>{episodes.length && episode.name}</strong>
              </li>
              <li>
                Дата выхода эпизода в эфир:{" "}
                <strong>{episodes.length && episode.air_date}</strong>
              </li>
              <li>
                Список персонажей, которые были замечены в эпизоде:{" "}
                <strong>{episodes.length && episode.characters.length}</strong>
              </li>
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
