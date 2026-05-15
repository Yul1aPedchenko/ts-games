export interface Scientist {
  name: string;
  surname: string;
  born: number;
  dead: number;
  id: number;
  img: string;
}

export type ActionName = "bornIn19Century" | "findEinstein" | "sortByAlphabet" | "surnameStartsWithC" | "sortByYearsLived" | "removeNamesWithA" | "youngestScientist" | "longestAndShortestLife" | "sameFirstLetters";

export interface ScientistButton {
  text: string;
  actionName: ActionName;
}
