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
    // ---  1
    // then run the first test --> npx mocha "src/**/*.test.js" --recursive --require @babel/register
    // it should be failed, just to have the first failing test, just to make sure wont give us a false positive
    
    
    // --- 2
    // in order not to rewrite a big long command in terminal to run a test need to change the test from script. 
    // changed from  "echo \"Error: no test specified\" && exit 1" to "npx mocha \"src/**/*.test.js\" --recursive --require @babel/register"
    // in Terminal -> npm run test

    it ('return the correct letter count for a word with only one of each letter ',() => {
        const expected = { c: 1, a:1, t:1};
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected)
    })

    it ('return the correct letter count for words with more than one of certain letters', () => {
        
        const expected = { m: 1, i: 4, s: 4, p: 2};
        const actual = getLetterCount('mississippi');
        expect(actual).to.deep.equal(expected)
    })
})
