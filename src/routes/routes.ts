import { HomePage } from "./pages/HomePage";
import { PokemonCardPage } from "./pages/PokemonCardPage";

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
