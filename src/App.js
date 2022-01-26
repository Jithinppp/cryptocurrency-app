import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=10");
  }, []);

  return <div className="App">hello world</div>;
}

export default App;
