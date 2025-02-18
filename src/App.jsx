import "./App.css";
import Counter from "./components/useContext/counter";
import CounterContext from "./components/useContext/CounterContext";
import CalculateFactorial from "./components/UseMemo";
import UseMemoParent from "./components/UseMemoParent";

function App() {
  return (
    <div>
      {/* <CalculateFactorial /> */}
      {/* <UseMemoParent/> */}
      <CounterContext>
        <Counter />
      </CounterContext>
    </div>
  );
}

export default App;
