export interface TypeStyle {
  type: string;
  styles: { bgColor: string; from: string; via?: string; to: string };
}

export const defaultTypeStyle: TypeStyle = {
  type: "default",
  styles: { bgColor: "bg-red-500", from: "from-red-700", to: "to-red-400" },
};

export const typeStyles = [
  {
    type: "normal",
    styles: { bgColor: "bg-slate-400", from: "from-slate-500", to: "to-slate-200" },
  },
  {
    type: "flying",
    styles: { bgColor: "bg-sky-600", from: "from-sky-500", to: "to-sky-200" },
  },
  {
    type: "poison",
    styles: { bgColor: "bg-purple-400", from: "from-purple-500", to: "to-purple-200" },
  },
  {
    type: "ground",
    styles: { bgColor: "bg-amber-700", from: "from-amber-700", to: "to-yellow-500" },
  },
  {
    type: "rock",
    styles: { bgColor: "bg-stone-800", from: "from-stone-900", to: "to-stone-600" },
  },
  {
    type: "bug",
    styles: { bgColor: "bg-lime-400", from: "from-lime-500", to: "to-lime-200" },
  },
  {
    type: "ghost",
    styles: { bgColor: "bg-gray-400", from: "from-gray-500", to: "to-gray-200" },
  },
  {
    type: "steel",
    styles: { bgColor: "bg-gray-800", from: "from-gray-800", to: "to-gray-400" },
  },
  {
    type: "fire",
    styles: { bgColor: "bg-red-500", from: "from-red-900", to: "to-red-400" },
  },
  {
    type: "water",
    styles: { bgColor: "bg-blue-500", from: "from-blue-700", to: "to-blue-300" },
  },
  {
    type: "grass",
    styles: { bgColor: "bg-green-400", from: "from-green-500", to: "to-green-200" },
  },
  {
    type: "electric",
    styles: { bgColor: "bg-yellow-400", from: "from-yellow-500", to: "to-yellow-200" },
  },
  {
    type: "psychic",
    styles: { bgColor: "bg-fuchsia-500", from: "from-fuchsia-600", to: "to-fuchsia-200" },
  },
  {
    type: "fighting",
    styles: { bgColor: "bg-rose-400", from: "from-rose-500", to: "to-rose-200" },
  },
  {
    type: "ice",
    styles: { bgColor: "bg-indigo-400", from: "from-indigo-500", to: "to-indigo-200" },
  },
  {
    type: "dragon",
    styles: { bgColor: "bg-amber-400", from: "from-amber-500", to: "to-amber-200" },
  },
  {
    type: "dark",
    styles: { bgColor: "bg-black", from: "from-neutral-900", to: "to-neutral-500" },
  },
  {
    type: "fairy",
    styles: { bgColor: "bg-pink-400", from: "from-pink-500", to: "to-pink-200" },
  },
  {
    type: "unknown",
    styles: { bgColor: "bg-fuchsia-300", from: "from-fuchsia-500", to: "to-fuchsia-300" },
  },
  {
    type: "shadow",
    styles: { bgColor: "bg-slate-600", from: "from-slate-800", to: "to-slate-600" },
  },
];
