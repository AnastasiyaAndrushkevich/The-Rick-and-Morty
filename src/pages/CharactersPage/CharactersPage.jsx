import { useEffect } from "react";
import s from "./CharactersPage.module.css";
import axios from "axios";

export const CharactersPage = () => {
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character");
  }, []); //side effect

  return <h1 className={"pageTitle"}>CharactersPage</h1>;
};
