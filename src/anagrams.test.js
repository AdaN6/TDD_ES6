import { expect } from "chai";

import { isAnagram } from "./anagrams";

// isAnagrams(string1 , string2)
//spaces should be ignored
//case should be ignored

describe(" isAnagram - basic functionality", () => {
     
  it("returns true when two known anagrams are passed in", () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });
 


});

