import { lazy, Suspense } from "react";
import { FadeIn } from "./components/FadeIn/FadeIn";

const Header = lazy(() =>
  import("./components/Header/Header").then((module) => ({
    default: module.Header,
  })),
);
const LeapYearChecker = lazy(() =>
  import("./components/LeapYearChecker/LeapYearChecker").then((module) => ({
    default: module.LeapYearChecker,
  })),
);
const GuessNumber = lazy(() =>
  import("./components/GuessNumber/GuessNumber").then((module) => ({
    default: module.GuessNumber,
  })),
);
const RockPaperScissors = lazy(() =>
  import("./components/RockPaperScissors/RockPaperScissors").then((module) => ({
    default: module.RockPaperScissors,
  })),
);
const Calculator = lazy(() =>
  import("./components/Calculator/Calculator").then((module) => ({
    default: module.Calculator,
  })),
);
const TimeCalculator = lazy(() =>
  import("./components/TimeCalculator/TimeCalculator").then((module) => ({
    default: module.TimeCalculator,
  })),
);
const FootballGame = lazy(() =>
  import("./components/FootballGame/FootballGame").then((module) => ({
    default: module.FootballGame,
  })),
);
const BiggestNumber = lazy(() =>
  import("./components/BiggestNumber/BiggestNumber").then((module) => ({
    default: module.BiggestNumber,
  })),
);
const Scientists = lazy(() =>
  import("./components/Scientists/Scientists").then((module) => ({
    default: module.Scientists,
  })),
);
const TextSlider = lazy(() =>
  import("./components/TextSlider/TextSlider").then((module) => ({
    default: module.TextSlider,
  })),
);

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <FadeIn>
        <Header />
      </FadeIn>
      <FadeIn>
        <LeapYearChecker />
      </FadeIn>
      <FadeIn>
        <GuessNumber />
      </FadeIn>
      <FadeIn>
        <RockPaperScissors />
      </FadeIn>
      <FadeIn>
        <Calculator />
      </FadeIn>
      <FadeIn>
        <TimeCalculator />
      </FadeIn>
      <FadeIn>
        <FootballGame />
      </FadeIn>
      <FadeIn>
        <BiggestNumber />
      </FadeIn>
      <FadeIn>
        <Scientists />
      </FadeIn>
      <FadeIn>
        <TextSlider title="Мій слайдер" items={["React", "TypeScript", "JavaScript", "Node.js", "Vite"]} />
      </FadeIn>
    </Suspense>
  );
}

export default App;
