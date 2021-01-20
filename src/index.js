module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero'
  }
  number = number.toString().split('')
  let result = ''
  let count = 3
  while (number.length) {
    if (number.length === 5) {
      result += getDozen(n.shift())
      continue
    }

    if (number.length == 2 && number[0] !== '0'){
      if (number[0] === '1') {
        result += getTwoDigitNum(number.join(''))
        number.splice(0)
        continue
      } else {
        result += getDozen(number.shift())
        continue
      }
    }
    if(result[result.length-1] !== ' ') {
      result += ' '
    }
    result += getDigit(number.shift())

    if(number.length === 3) {
      result += ' thousand'
    }
    if (number.length === 2 ) {
      result += ' hundred '
    }
  }
  return result.trim()
}

function getDigit(n) {
  const numbers = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
  ]
  return numbers[n]
}
function getDozen(n) {
  const dozens = ['twenty', 'thirty', 'forty', 
  'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  return dozens[n-2] 
}

function getTwoDigitNum(n) {
  const upToTwenty = ['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 
  'sixteen', 'seventeen', 'eighteen', 'nineteen']

    return upToTwenty[n[1]]
}