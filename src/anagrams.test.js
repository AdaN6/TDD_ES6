import { expect } from "chai";

import { isAnagram } from "./anagrams";

// isAnagrams(string1 , string2)
//spaces should be ignored
//case should be ignored

describe(" isAnagram - basic functionality", () => {
     // 'listen' = 'silent'
     // 'elbow' = 'below'
  it("returns true when two known anagrams are passed in", () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });
 
  // 'elbows' =! 'below'

  it ('returns false when either of the string has extra letter', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected)
  });


});

