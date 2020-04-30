import { flatten, Groups, VerbGroup, Verb, sort } from './verb'

test("should return one verb when single group with only element", () => {
    const expected = createTestVerb();
    let testGroup = new TestGroups([new TestVerbGroup("group_1", expected)]);
    expect(flatten(testGroup)).toStrictEqual(expected);
});

test('should return empty array if groups are empty', () => {
    let testGroup = new TestGroups([]);
    expect(flatten(testGroup).length).toBe(0)
});

test('should return empty array if groups.verbs are empty', () => {
    let testGroup = new TestGroups([new TestVerbGroup("group_1", [])]);
    expect(flatten(testGroup).length).toBe(0)
});

test('should concatenate verbs from several groups', () => {
    let v1 = createTestVerb();
    let v2 = createTestVerb();
    let testGroup = new TestGroups([
        new TestVerbGroup("group_1", v1),
        new TestVerbGroup("group_2", v2)]
    );
    expect(flatten(testGroup)).toStrictEqual(v1.concat(v2));
});

test('should return sorted array', () => {
    let v1 = createTestVerb();
    let v2 = createTestVerb();
    v2[0].v1 = "awake";
    let testArray = v1.concat(v2);
    expect(sort(testArray)).toStrictEqual(v2.concat(v1));
});

function createTestVerb(): Array<Verb> {
    return [{ "v1": "take", "v2": ["took"], "v3": ["taken"]}];
}

class TestVerbGroup implements VerbGroup {

    name: string;
    verbs: Verb[];

    constructor(name: string, verbs: Verb[]) {
        this.name = name;
        this.verbs = verbs;
    }

}

class TestGroups implements Groups {
    groups: VerbGroup[];
    constructor(groups: VerbGroup[]) {
        this.groups = groups;
    }
}
