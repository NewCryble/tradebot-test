import "./App.css";
import { Header, Graph, Bots } from "./components";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('./assets/layers/bg/bg.png')]">
        <div className="h-screen w-screen bg-[url('./assets/layers/bg/bg_2.png')] bg-cover">
          <Header />
          <Graph />
          <Bots />
        </div>
      </div>
    </>
  );
}

export default App;
