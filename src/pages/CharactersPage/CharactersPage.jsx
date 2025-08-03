import { useEffect } from "react";
import s from "./CharactersPage.module.css";
import axios from "axios";
import { useState } from "react";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []); //side effect

  return (
    <div className={"pageContainer"}>
      <h1 className={"pageTitle"}>CharactersPage</h1>
      {characters.length && (
        <div className={s.characters}>
          {characters.map((character) => {
            return (
              <div key={character.id} className={s.character}>
                <div className={s.characterLink}>{character.name}</div>
                <img src={character.image} alt={`${character.name} avatar`} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
