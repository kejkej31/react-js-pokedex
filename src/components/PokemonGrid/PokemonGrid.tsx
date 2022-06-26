import GridTile from "./GridTile";
import PaginationResult from "api/interfaces/PaginationResult";
import { getPokemons } from "api/PokemonApi";
import { GenericPokemon } from "api/interfaces/Pokemon";
import { useAsync } from "hooks/useAsync";
import { useState, useEffect, useRef, useCallback, useMemo, useContext } from "react";
import Loader from "components/Common/Loader";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { MetaTagsContext } from "contexts/MetaTagsContext";

const imgUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

interface PokemonGridProps {
  initPage?: number;
  limit?: number;
  debounce?: number;
}

const storageGridKey = "grid_pokemons";

export const PokemonGrid = ({ initPage = 1, limit = 20, debounce = undefined }: PokemonGridProps) => {
  const metaTags = useContext(MetaTagsContext);
  const [page, setPage] = useState(initPage - 1);
  const [pokemons, setPokemons] = useState<GenericPokemon[]>(
    JSON.parse(sessionStorage.getItem(storageGridKey) ?? "[]")
  );
  const offset = (page: number, limit: number) => page * limit;
  const callback = useCallback(() => getPokemons(offset(page, limit), limit), [page, limit]);
  const { result, loading } = useAsync<PaginationResult<GenericPokemon>>(callback, debounce);
  const loadingButtonRef = useRef(null);
  const loadMoreIsVisible = useIntersectionObserver(
    loadingButtonRef,
    { root: null, threshold: 1, rootMargin: "200px 0px" },
    false
  );

  useEffect(() => {
    metaTags.setTitle("Pokedex");
  });

  useEffect(() => {
    if (loadMoreIsVisible) {
      setPage(pokemons.length === 0 ? 0 : pokemons.length / limit);
    }
  }, [loadMoreIsVisible, limit, pokemons.length]);

  useMemo(() => {
    if (result?.results) {
      setPokemons((oldPokemons) => {
        const newPokemons = [...oldPokemons, ...result.results];
        // Remove duplicates
        for (let i = newPokemons.length - 1; i >= 0; i--) {
          if (newPokemons.filter((e) => e.name === newPokemons[i].name).length > 1) {
            newPokemons.splice(i, 1);
          }
        }
        newPokemons.sort((a, b) => a.id - b.id);
        sessionStorage.setItem(storageGridKey, JSON.stringify(newPokemons));
        return newPokemons;
      });
    }
  }, [result]);

  const gridTiles = useMemo(
    () =>
      pokemons.map<JSX.Element>((pokemon) => {
        return <GridTile key={pokemon.id} id={pokemon.id} imageUrl={imgUrl(pokemon.id)} title={pokemon.name} />;
      }),
    [pokemons]
  );

  const loadMoreButton = (
    <button className="opacity-0" ref={loadingButtonRef}>
      Load more
    </button>
  );
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {gridTiles}
        {!loading && loadMoreButton}
      </div>
      {loading && <Loader wrapperClass="justify-center" />}
    </>
  );
};

export default PokemonGrid;
