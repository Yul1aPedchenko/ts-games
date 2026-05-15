// import "./App.css";
import { Header } from "./components/Header/Header";
import { LeapYearChecker } from "./components/LeapYearChecker/LeapYearChecker";
import { GuessNumber } from "./components/GuessNumber/GuessNumber";
import { RockPaperScissors } from "./components/RockPaperScissors/RockPaperScissors";
import { Calculator } from "./components/Calculator/Calculator";
import { TimeCalculator } from "./components/TimeCalculator/TimeCalculator";
import { FootballGame } from "./components/FootballGame/FootballGame";
import { BiggestNumber } from "./components/BiggestNumber/BiggestNumber";
import { Scientists } from "./components/Scientists/Scientists";
import { TextSlider } from "./components/TextSlider/TextSlider";

function App() {
  return (
    <>
      <Header />
      <LeapYearChecker />
      <GuessNumber />
      <RockPaperScissors />
      <Calculator />
      <TimeCalculator />
      <FootballGame />
      <BiggestNumber />
      <Scientists />
      <TextSlider title="Мій слайдер" items={["React", "TypeScript", "JavaScript", "Node.js", "Vite"]} />
    </>
  );
}

export default App;
