import "./App.css";
import { LeapYearChecker } from "./components/LeapYearChecker/LeapYearChecker";
import { GuessNumber } from "./components/GuessNumber/GuessNumber";
import { RockPaperScissors } from "./components/RockPaperScissors/RockPaperScissors";
import { Calculator } from "./components/Calculator/Calculator";
import { TimeCalculator } from "./components/TimeCalculator/TimeCalculator";

function App() {
  return (
    <>
      <LeapYearChecker />
      <GuessNumber />
      <RockPaperScissors />
      <Calculator />
      <TimeCalculator />
    </>
  );
}

export default App;
