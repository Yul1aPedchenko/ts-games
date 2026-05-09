import "./App.css";
import { LeapYearChecker } from "./components/LeapYearChecker/LeapYearChecker";
import { GuessNumber } from "./components/GuessNumber/GuessNumber";
import { RockPaperScissors } from "./components/RockPaperScissors/RockPaperScissors";

function App() {
  return (
    <>
      <LeapYearChecker />
      <GuessNumber />
      <RockPaperScissors />
    </>
  );
}

export default App;
