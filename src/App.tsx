import "./App.css";
import { Header, Graph, Bots, Filter } from "./components";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('./assets/layers/bg/bg.png')]">
        <div className="h-screen w-screen bg-[url('./assets/layers/bg/bg_2.png')] bg-cover">
          <Header />
          <Graph />
          <Bots />
          <Filter />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
