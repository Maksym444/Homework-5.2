function plural (age) {
  let year;
  let oneNumber = (age % 10);
  let twoNumber = (age % 100)
      if (4 < oneNumber && oneNumber <= 9 || (twoNumber >= 10 && twoNumber < 21) || (oneNumber ==0)) {
          year = (' лет');
      }
      else if (oneNumber == 1) {
          year = (' год');
      }
      else if (1 < oneNumber && oneNumber < 5)  {
          year = (' года');
      }
  return age + year;
}
alert(plural(1300));

module.exports = { plural };

