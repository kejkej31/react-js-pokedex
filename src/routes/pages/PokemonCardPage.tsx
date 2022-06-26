import PokemonCard from "components/PokemonCard/PokemonCard";
import { useParams } from "react-router-dom";
import NotFoundPage from "components/ErrorPages/NotFoundPage";

export const PokemonCardPage = () => {
  const { id } = useParams();
  return !isNaN(Number(id)) ? <PokemonCard id={Number(id)} /> : <NotFoundPage />;
};
