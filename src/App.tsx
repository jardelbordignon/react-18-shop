import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Basket } from "./components/Basket";

import data from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main products={data.products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
