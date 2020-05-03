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

export const createInitialState = model => {
  const initialProductState = {
    name: '',
    productNumber: 0,
    category: '',
    vendor: '',
    unit: 0.00,
    par: 0,
    onHand: 0,
    orderQty: 0
  }

  const initialVendorState = {
    name: '',
    email: '',
    phone: ''
  }

  return model === 'products' ? initialProductState : initialVendorState
}

export const isTextField = field => {
  const textFields = ['name', 'category', 'vendor', 'email', 'phone']
  return textFields.includes(field)
}
