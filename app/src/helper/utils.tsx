/**
 * Converts a string to an array of string
 *
 * @param {string} word - the word to be converted
 * @returns {string[]} - list of characters in word
 */
export const explode = (word: string) => {
  return word.split("");
};

/**
 * Removes all occurences of char in word but excludes the one at pos
 *
 * @param {string} word - the word to be cleaned
 * @param {string} char -  the character to be stripped from word
 * @param {number} pos - the position of the char to be excluded
 * @return {string} - the stripped string
 */
export const cleanString = (word: string, char: string, pos: number) => {
  const cleaned = word.split("").filter((value, index) => {
    if (value !== char || pos === index) return value;
    return false;
  });

  return cleaned.join("");
};

/**
 * Counts the number of occurence of char in word
 *
 * @param {string} word - the string to be checked against
 * @param {string} char - the character to be checked for
 * @returns {number} - the number of occurence of char
 */
export const count = (word: string, char: string): number => {
  if (!word.includes(char)) return 0;

  return word
    .split("")
    .reduce(
      (total, currentChar) => (currentChar === char ? total + 1 : total),
      0
    );
};

/**
 * Geneates a random digit in Hexadecimal
 *
 * @returns {string} - a hexadecimal number
 */
const randomHex = () => {
  const hex = Math.floor(Math.random() * 256).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

/**
 * generates a random color hexcode
 *
 * @returns {string} - the generated hexcode
 */
export const randomColor = () => {
  return `#${randomHex()}${randomHex()}${randomHex()}`;
};

/**
 * Checks if a word has more than one occurence of a character
 *
 * @param {string} word: the word to be checked
 * @returns {boolean} - true if no repeatition of characters else false
 */
export const noCharRepeat = (word: string) => {
  const found: string[] = [];
  return word.split("").every((value) => {
    if (found.includes(value)) return false;
    found.push(value);
    return true;
  });
};
