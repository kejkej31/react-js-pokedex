import { RoutesEnum } from "routes/routes";

const ErrorPage = ({ error = "Something went wrong 🥺" }: { error?: string }) => {
  return (
    <div className="min-h-screen flex flex-wrap flex-col justify-center items-center text-white">
      <h1 className="text-3xl mb-8 drop-shadow-2xl shadow-black text-shadow">{error}</h1>
      <a className="bg-cyan-700 rounded-full p-4" href={RoutesEnum.Home}>
        Back to the home page!
      </a>
    </div>
  );
};

export default ErrorPage;
