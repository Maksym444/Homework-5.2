/* global require, test, expect */
const { plural } = require("./index");

test("Год", () => {
  for (let age = 1; age < 1000; age++) {
  	if (age % 10 == 1 && age % 100 != 11) {
  	  expect(plural(age)).toBe(age + " год");
  	}
  }
});

test("Года", () => {
  for (let age =1; age <1000; age++) {
    if (age %10 <=2 && age %10 >=4) {
      expect(plural(age)).toBe(age + " года"); 
    }
  }
});

test("Лет", () => {
  for (let age =1; age < 1000; age++) {
    if (age% 10>4 && age % 10 <=9 || (age %100 >= 10 && age %100 <21) || (age %10 ==0)) {
      expect(plural(age)).toBe( age +" лет");
    }
  }
}); 


