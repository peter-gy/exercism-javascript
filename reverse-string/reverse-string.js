export const reverseString = string => {
  return string === "" ? "" : reverseString(string.substr(1)) + string.charAt(0);
};
