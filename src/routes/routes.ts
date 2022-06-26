import { HomePage } from "./HomePage";
import { PokemonCardPage } from "./PokemonCardPage";

export enum RoutesEnum {
  Home = "/",
  Pokemon = "/pokemon/:id",
}

export const routes = [
  {
    path: RoutesEnum.Home,
    element: HomePage,
  },
  {
    path: RoutesEnum.Pokemon,
    element: PokemonCardPage,
  },
];

export function findRoute(path: RoutesEnum) {
  return routes.find((route) => route.path === path);
}
