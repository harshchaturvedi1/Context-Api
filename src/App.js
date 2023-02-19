import { Counter } from "./components/contextApi/counter";
import { CounterButtons } from "./components/contextApi/counterButtons";
import { CounterContextProvider } from "./components/contextApi/counterProvider";


function App() {
  return (
    <CounterContextProvider>
      <div>
        <Counter />
        <CounterButtons />

      </div>
    </CounterContextProvider>
  );
}

export default App;
