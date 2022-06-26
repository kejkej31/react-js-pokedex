import "./App.css";
import MainRouter from "routes/MainRouter";
import ErrorBoundary from "components/Common/ErrorBoundary";
import { MetaTagsContext, DefaultMetaTagsContextProvider } from "contexts/MetaTagsContext";

function App() {
  return (
    <div className="min-h-screen container mx-auto">
      <MetaTagsContext.Provider value={DefaultMetaTagsContextProvider}>
        <ErrorBoundary>
          <MainRouter />
        </ErrorBoundary>
      </MetaTagsContext.Provider>
    </div>
  );
}

export default App;
