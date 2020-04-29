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
    return fetch('./verbs.json')
        .then(res => res.json())
        .catch(err => {throw new Error(err)})  
}

export function flatten(group: Groups): Array<Verb> {
    const verbs = group.groups.flatMap(g => g.verbs);
    return verbs.sort((a: Verb, b: Verb) => a.v1.localeCompare(b.v1));
}