import { Bars } from "react-loader-spinner";

export default function Loader(props: any) {
  const { className } = props;
  return (
    <Bars wrapperClass={className} {...props} height="100" width="100" color="white" ariaLabel="loading-indicator" />
  );
}
