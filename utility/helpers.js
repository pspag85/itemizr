import axios from 'axios'

export const fetchData = async (path, setData) => {
  try {
    const {data} = await axios.get(`/api/${path}`)
    setData(data)
  } catch(err) {
    console.error(err)
  }
}

export const randomIntGen = () => Math.floor(Math.random() * Math.floor(10))

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
