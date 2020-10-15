export interface Verb {
    v1: string;
    v2: Array<string>;
    v3: Array<string>;
}

export interface VerbGroup {
    name: string;
    verbs: Array<Verb>
}

export interface Groups {
    groups: Array<VerbGroup>
}

export async function readGroups(): Promise<Groups> {
    let response = await fetch('./verbs.json');
    return response.json();
}

export function flatten(group: Groups): Array<Verb> {
    return group.groups.flatMap(g => g.verbs);
}

export function sort(verbs: Array<Verb>): Array<Verb> {
    return verbs.sort((a: Verb, b: Verb) => a.v1.localeCompare(b.v1));
}

export function shuffleArray(array: Array<any>) {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    };
    return array;
};

export const verbComparison = (correctAnswer: string, givenAnswer: string): Boolean => {
    if (correctAnswer === givenAnswer.toLowerCase().trim()) {
        return true;
    } else return false;
};

export const fetchVerbs = async () => {
    const data = await readGroups();
    const flattenVerbs = flatten(data);
    return shuffleArray(flattenVerbs);
};