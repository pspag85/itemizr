const randomIntGen = () => Math.floor(Math.random() * Math.floor(10))

export const randomPasswordGen = () => {
  let password = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i = 0; i < 8; i += 1) {
    let index = randomIntGen()
    let char = chars[index]
    password += char
  }
  return password
}

export const formatNumToThreeDigitStr = (num) => {
  const numStr = num.toString()
  let prefix = ''
  for(let i = numStr.length; i < 3; i += 1) {
    prefix += '0'
  }
  return prefix += numStr
}

export const formatPriceToStr = (price) => {
  let priceStr = price === 0 ? '$0.00' : `$${price.toString()}`
  return priceStr
}
