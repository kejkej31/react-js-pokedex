import { cloneElement, ReactElement } from "react";

export interface LazyLoadedComponentProps {
  className?: string;
  component: JSX.Element;
  loaded: boolean;
  preloadComponent?: ReactElement;
  [rest: string | number | symbol]: any;
}

export const LazyLoadedComponent = (props: LazyLoadedComponentProps) => {
  let { preloadComponent, loaded, ...otherProps } = props;
  const classes = otherProps?.className ?? "";
  const pComponent =
    typeof preloadComponent !== "undefined" ? (
      cloneElement(preloadComponent, { className: classes + " justify-center items-center" })
    ) : (
      <div className={classes}></div>
    );

  return !loaded ? pComponent : otherProps.component;
};
