const count = require('text-count');

function Acerift() {
  const text = "A C E R I F T"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Acerift
