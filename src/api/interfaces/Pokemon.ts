export interface GenericPokemon {
  id: number;
  name: string;
  url: string;
}

export interface Pokemon extends GenericPokemon {
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  sprites: {
    other: {
      "official-artwork": {
        [x: string | number | symbol]: string;
      };
    };
  }
  species: any[];
  stats: any[];
  types: any[];
}
