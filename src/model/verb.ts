export interface Verb {
  v1: string;
  v2: Array<string>;
  v3: Array<string>;
}

export interface VerbGroup {
  name: string;
  verbs: Array<Verb>;
}

export interface Groups {
  groups: Array<VerbGroup>;
}

export async function readGroups(): Promise<Groups> {
  const response = await fetch("./verbs.json");
  return response.json();
}

export function flatten(verbsJson: Groups): Array<Verb> {
  return verbsJson.groups.flatMap((g) => g.verbs);
}

export function sort(verbs: Array<Verb>): Array<Verb> {
  return verbs.sort((a: Verb, b: Verb) => a.v1.localeCompare(b.v1));
}

export function shuffleArray(array: Verb[]): Verb[] {
  let currentIndex = array.length;
  let temporaryValue: Verb;
  let randomIndex: number;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    /* eslint-disable no-param-reassign */
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    /* eslint-disable no-param-reassign */
  }
  return array;
}

export const verbComparison = (
  correctAnswer: string,
  givenAnswer: string
): boolean => {
  if (correctAnswer === givenAnswer.toLowerCase().trim()) {
    return true;
  }
  return false;
};

export const fetchVerbs = async (): Promise<Verb[]> => {
  const data = await readGroups();
  const flattenVerbs = flatten(data);
  return shuffleArray(flattenVerbs);
};
