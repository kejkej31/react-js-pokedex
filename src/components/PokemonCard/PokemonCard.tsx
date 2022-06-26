import { Pokemon } from "api/interfaces/Pokemon";
import { useAsync } from "hooks/useAsync";
import { Stat, StatName } from "./Stat";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { getPokemon } from "api/PokemonApi";
import { typeStyles, defaultTypeStyle, TypeStyle } from "./TypeStyles";
import { createBrowserHistory } from "history";
import { LazyLoadedComponent } from "components/Common/LazyLoadedComponent";
import Loader from "components/Common/Loader";
import { MetaTagsContext } from "contexts/MetaTagsContext";

export const PokemonCard = ({ id }: { id: number }): JSX.Element => {
  const history = createBrowserHistory({ window });
  const callback = useCallback(() => getPokemon(id), [id]);
  const { result: pokemon, loading, error } = useAsync<Pokemon>(callback);
  const metaTags = useContext(MetaTagsContext);

  const getTypeStyles = (type?: string): TypeStyle => {
    const style = typeStyles.find((obj) => obj.type === type);
    return typeof style === "undefined" ? defaultTypeStyle : style;
  };

  useEffect(() => {
    if (pokemon) {
      metaTags.setTitle(`#${pokemon.id} ${pokemon.name}`);
    } else {
      metaTags.setTitle("Loading Pokemon...");
    }
  }, [pokemon, metaTags]);

  let mainTypeStyle = getTypeStyles().styles;
  let stats = useMemo<JSX.Element[]>(() => {
    let stats: JSX.Element[] = [];
    if (pokemon?.stats) {
      stats = pokemon?.stats
        .filter((stat) => Object.values(StatName).includes(stat.stat.name))
        .map((stat) => {
          return { name: stat.stat.name, value: stat.base_stat };
        })
        .map((stat) => {
          return <Stat key={stat.name} stat={stat} />;
        });
      stats.unshift(<Stat key={"experience"} stat={{ name: "experience", value: pokemon.base_experience }} />);
    }
    return stats;
  }, [pokemon?.stats, pokemon?.base_experience]);

  let types: JSX.Element[] = useMemo(() => {
    let types: JSX.Element[] = [];
    if (pokemon?.types) {
      types = pokemon.types.map(({ type }) => {
        const { styles } = getTypeStyles(type.name);
        return (
          <span key={type.name} className={"rounded-full mr-3 px-5 py-0.5 " + styles.bgColor}>
            {type.name}
          </span>
        );
      });
    }
    return types;
  }, [pokemon?.types]);

  let imgUrl = pokemon?.sprites.other["official-artwork"].front_default ?? "";
  const mainType = pokemon?.types[0]?.type.name;
  mainTypeStyle = getTypeStyles(mainType).styles;

  // with history.back we keep scroll
  const backButton = (
    <button onClick={history.back} className="absolute top-2 right-2 rounded-full bg-slate-700 p-2 px-3">
      Go back
    </button>
  );

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="flex flex-col text-white rounded-b-2xl h-[800px] max-w-2xl m-auto relative bg-[#404e64] shadow-2xl">
      {backButton}
      <LazyLoadedComponent
        className="h-full"
        loaded={!loading}
        preloadComponent={<Loader />}
        component={
          <>
            {/* Card header */}
            <div
              className={
                "max-h-64 flex-auto w-full rounded-b-[40px] bg-gradient-to-b " + Object.values(mainTypeStyle).join(" ")
              }
            >
              <img className={"m-auto h-64 object-contain"} src={imgUrl} alt="" />
            </div>
            <div className="px-2 sm:px-8">
              <div className="flex-auto text-center text-4xl my-2">{pokemon?.name}</div>
              <div className="my-6 flex flex-wrap justify-center">{types}</div>
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <span className="text-2xl">{pokemon?.weight / 10} kg</span>
                  <br />
                  <span className="text-sm">Weight</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl">{pokemon?.height / 10} m</span>
                  <br />
                  <span className="text-sm">Height</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl my-2">Base stats</div>
                {stats}
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default PokemonCard;
