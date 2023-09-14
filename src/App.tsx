import router from "./router";
import { useRoutes, Link } from "react-router-dom";
function App() {
  const outlet = useRoutes(router);
  return <div className="App">{outlet}</div>;
}

export default App;
