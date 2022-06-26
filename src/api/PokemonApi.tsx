import { GenericPokemon, Pokemon } from "./interfaces/Pokemon";
import PaginationResult from "./interfaces/PaginationResult";
import { firstToUpper } from "helpers";

type PokemonId = number | string;

export const getPokemons = async (offset: number, limit: number = 20): Promise<PaginationResult<GenericPokemon[]>> => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((resp) => {
      resp.results.forEach((pokemon: GenericPokemon) => {
        pokemon["name"] = firstToUpper(pokemon.name);
        pokemon["id"] = parseInt(pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", ""));
      });
      return resp;
    });

  return result;
};

export const getPokemonColors = async (id: PokemonId): Promise<any> =>
  await fetch(`https://pokeapi.co/api/v2/type/?offset=0&limit=30`).then((response) => response.json());

export const getPokemon = async (id: PokemonId): Promise<Pokemon> =>
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((pokemon) => {
      pokemon.name = firstToUpper(pokemon.name);
      return pokemon;
    });
