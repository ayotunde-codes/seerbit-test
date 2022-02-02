const isEmpty = (str) => (str ? !`${str}`.trim() : true);
//
//
export const formatMoney = (number) => {
  const n = Number(number);
  const myObj = {
    style: "decimal",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return n.toLocaleString("en", myObj).replace(".00", ":00");
};
//
//

export const capitalize = (word, transformAll = true) => {
  if (isNaN(word) && !isEmpty(word)) {
    const wordArr = word.split(" ");
    const newWord = wordArr.map((value) => {
      if (transformAll) {
        value = value.toLowerCase();
      }
      const chars = value.split("");
      if (chars[0]) chars[0] = chars[0].toUpperCase();
      return chars.join("");
    });
    return newWord.join(" ");
  }
  return word;
};
