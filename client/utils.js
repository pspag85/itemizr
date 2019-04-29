const randomIntGen = () => Math.floor(Math.random() * Math.floor(10))

const randomPasswordGen = () => {
  let password = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i = 0; i < 8; i += 1) {
    let index = randomIntGen()
    let char = chars[index]
    password += char
  }
  return password
}

const utils = {
  randomIntGen,
  randomPasswordGen
}

module.exports = utils