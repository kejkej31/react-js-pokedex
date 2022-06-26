import { LazyLoadedComponent } from "components/Common/LazyLoadedComponent";
import Loader from "components/Common/Loader";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { createRef, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { RoutesEnum } from "routes/routes";

interface TileData {
  id: number;
  imageUrl: string;
  title: string;
}

const bgColors = [
  "bg-gradient-radial",
  "from-green-900",
  "to-green-600",
  "[&:nth-child(2n)]:from-red-900",
  "[&:nth-child(2n)]:to-red-600",
  "[&:nth-child(3n)]:from-blue-900",
  "[&:nth-child(3n)]:to-blue-600",
];

export const GridTile = ({ id, imageUrl, title }: TileData) => {
  const tileRef = useRef(null);
  const isVisible = useIntersectionObserver(tileRef, { threshold: 0.25 }, true);

  return useMemo(() => {
    return (
      <Link
        ref={tileRef}
        to={RoutesEnum.Pokemon.replace(":id", id.toString())}
        className={
          bgColors.join(" ") +
          " h-64 shadow-md rounded-xl w-[45%] sm:w-48 hover:shadow-2xl hover:cursor-pointer m-1.5 relative text-white"
        }
      >
        <LazyLoadedComponent
          className={"h-full w-full "}
          loaded={isVisible}
          component={<img className="object-contain h-52 " src={imageUrl} alt={title} />}
        />
        <span className="absolute bg-yellow-500 min-w-[32px] text-center p-1 text-sm rounded-xl -top-1 -right-1">
          #{id}
        </span>
        <div className="flex-auto text-center text-lg p-2">{title}</div>
      </Link>
    );
  }, [id, imageUrl, title, isVisible]);
};

export default GridTile;
