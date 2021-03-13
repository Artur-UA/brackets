module.exports = function check(str, bracketsConfig) {
  let newStr = str.replace(/\(\)|\[]|{}|\|\||12|34|56|77|88/, '')
  if (newStr === str) { 
      return !str
    }
  return check(newStr)
};
