import { firstToUpper } from "helpers";

export enum StatName {
  Experience = "experience",
  Hp = "hp",
  Attack = "attack",
  Defense = "defense",
  Speed = "speed",
}

export interface StatStyle {
  name: StatName;
  styles: {
    from: string;
    to: string;
  };
}

export const Stat = ({ stat }: { stat: any }) => {
  const statToColorMap: StatStyle[] = [
    {
      name: StatName.Experience,
      styles: {
        from: "from-cyan-500",
        to: "to-blue-600",
      },
    },
    {
      name: StatName.Hp,
      styles: {
        from: "from-red-400",
        to: "to-rose-700",
      },
    },
    {
      name: StatName.Attack,
      styles: {
        from: "from-purple-400",
        to: "to-indigo-700",
      },
    },
    {
      name: StatName.Defense,
      styles: {
        from: "from-green-400",
        to: "to-emerald-700",
      },
    },
    {
      name: StatName.Speed,
      styles: {
        from: "from-blue-300",
        to: "to-cyan-700",
      },
    },
  ];
  const getStatStyle = (name: StatName): StatStyle | any => {
    const defaultTypeStyles: object = { type: "default", styles: { from: "from-cyan-500", to: "to-blue-600" } };
    const style = statToColorMap.find((obj) => obj.name === name);
    return typeof style === "undefined" ? defaultTypeStyles : style;
  };
  const styles = getStatStyle(stat.name).styles;
  const statMax = stat.name === StatName.Experience ? 1000 : 300;
  return (
    <div>
      <div className="text-left leading-7">{firstToUpper(stat.name)}</div>
      <div className="border w-full text-sm text-center rounded-md bg-slate-500">
        <div
          style={{
            maxWidth: (stat.value / statMax) * 100 + "%",
            animationName: "progressBar",
            animationDuration: "3s",
          }}
          className={
            "overflow-x-visible whitespace-nowrap rounded-md text-white bg-gradient-to-b " +
            Object.values(styles).join(" ")
          }
        >
          {stat.value} / {statMax}
        </div>
      </div>
    </div>
  );
};

export default Stat;
