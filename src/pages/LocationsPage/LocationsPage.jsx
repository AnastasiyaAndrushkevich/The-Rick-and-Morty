import { useEffect, useState } from "react";
import axios from "axios";

export const LocationsPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location").then((res) => {
      setLocations(res.data.results);
    });
  }, []);
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">LocationPage</h1>
      {locations.map((location) => {
        return (
          <div key={location.id}>
            <ul>
              <li>
                Название локации:{" "}
                <strong>{locations.length && location.name}</strong>
              </li>
              <li>
                Тип локации:{" "}
                <strong>{locations.length && location.type}</strong>
              </li>
              <li>
                Измерение, в котором находится местоположение:{" "}
                <strong>{locations.length && location.dimension}</strong>
              </li>
              <li>
                Количество персонажей, которых видели в данной локации:{" "}
                <strong>{locations.length && location.residents.length}</strong>
              </li>
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
