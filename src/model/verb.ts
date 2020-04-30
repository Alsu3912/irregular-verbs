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
    return  group.groups.flatMap(g => g.verbs);
}

export function sort(verbs: Array<Verb>): Array<Verb> {
    return verbs.sort((a: Verb, b: Verb) => a.v1.localeCompare(b.v1));
}