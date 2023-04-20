import { createRoot } from "react-dom/client";
import Pet from "./Movie";
import SearchParams from "./SearchParams";
//changed

const App = () => {
  return (
    <div>
      <h1>Movies!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
