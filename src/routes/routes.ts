import PokemonGrid from "components/PokemonGrid/PokemonGrid";
import { PokemonRoute } from "./PokemonRoute";

export enum RoutesEnum {
  Home = "/",
  Pokemon = "/pokemon/:id",
}

export const routes = [
  {
    path: RoutesEnum.Home,
    element: PokemonGrid,
  },
  {
    path: RoutesEnum.Pokemon,
    element: PokemonRoute,
  },
];

export function findRoute(path: RoutesEnum) {
  return routes.find((route) => route.path === path);
}
