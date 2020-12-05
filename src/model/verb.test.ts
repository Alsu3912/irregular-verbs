import {
  flatten,
  Groups,
  VerbGroup,
  Verb,
  sort,
  shuffleArray,
  verbComparison,
} from "./verb";

function createTestVerb(): Array<Verb> {
  return [{ v1: "take", v2: ["took"], v3: ["taken"] }];
}
class TestGroups implements Groups {
  groups: VerbGroup[];

  constructor(groups: VerbGroup[]) {
    this.groups = groups;
  }
}

class TestVerbGroup implements VerbGroup {
  name: string;

  verbs: Verb[];

  constructor(name: string, verbs: Verb[]) {
    this.name = name;
    this.verbs = verbs;
  }
}

test("should return one verb when single group with only element", () => {
  const expected = createTestVerb();
  const testGroup = new TestGroups([new TestVerbGroup("group_1", expected)]);
  expect(flatten(testGroup)).toStrictEqual(expected);
});

test("should return empty array if groups are empty", () => {
  const testGroup = new TestGroups([]);
  expect(flatten(testGroup).length).toBe(0);
});

test("should return empty array if groups.verbs are empty", () => {
  const testGroup = new TestGroups([new TestVerbGroup("group_1", [])]);
  expect(flatten(testGroup).length).toBe(0);
});

test("should concatenate verbs from several groups", () => {
  const v1 = createTestVerb();
  const v2 = createTestVerb();
  const testGroup = new TestGroups([
    new TestVerbGroup("group_1", v1),
    new TestVerbGroup("group_2", v2),
  ]);
  expect(flatten(testGroup)).toStrictEqual(v1.concat(v2));
});

test("should return sorted array", () => {
  const v1 = createTestVerb();
  const v2 = createTestVerb();
  v2[0].v1 = "awake";
  const testArray = v1.concat(v2);
  expect(sort(testArray)).toStrictEqual(v2.concat(v1));
});

test("should return true when given answer is correct", () => {
  expect(verbComparison("took", "took")).toBeTruthy();
});

test("should return true when given answer in uppercase", () => {
  expect(verbComparison("took", "TOOK")).toBeTruthy();
});

test("should return true when given answer contains spaces", () => {
  expect(verbComparison("took", "   took ")).toBeTruthy();
});

test("should return true when given answer in uppercase and contains spaces", () => {
  expect(verbComparison("took", " Took  ")).toBeTruthy();
});

test("should return false when given answer is empty", () => {
  expect(verbComparison("took", "")).toBeFalsy();
});

test("should return false when given answer is empty (filled with spaces)", () => {
  expect(verbComparison("took", "   ")).toBeFalsy();
});

test("should have the same length after shuffle", () => {
  const v1 = createTestVerb();
  v1.push({ v1: "take", v2: ["took"], v3: ["taken"] });
  const myArray = v1;
  const shuffledArray = shuffleArray(myArray);
  expect(myArray.length).toBe(shuffledArray.length);
});

test("should work in case of empty array", () => {
  expect(shuffleArray([])).toStrictEqual([]);
});

test("should work in case of one element in an array", () => {
  const v1 = createTestVerb();
  expect(shuffleArray(v1)).toStrictEqual(v1);
});
