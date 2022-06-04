import { useEffect } from "react";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    window.document.title = "Country Data";
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
