import { readGroups, flatten } from '../model/verb';
import { shuffleArray } from './shuffle';

export const fetchVerbs = async () => {
    const data = await readGroups();
    const flattenVerbs = flatten(data);
    return shuffleArray(flattenVerbs);
}