import {expect} from 'chai';

import { getLetterCount } from './letter-count';

// mocha keyword describe

describe('getLetterCount - basic functionality', () => {
    // it is denote individual test, need two arguments
    it('returns an empty object when passed an empty string', () => {
            const expected = {};
            const actual = getLetterCount('');
            // deep keyword is to comparing objects
            expect(actual).to.deep.equal(expected);
    })
})

