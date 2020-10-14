import { readGroups, flatten } from '../model/verb';
import { shuffleArray } from '../model/verb';

export const fetchVerbs = async () => {
    const data = await readGroups();
    const flattenVerbs = flatten(data);
    return shuffleArray(flattenVerbs);
}