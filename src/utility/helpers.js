const randomIntGen = () => Math.floor(Math.random() * Math.floor(10));

export const randomPasswordGen = () => {
  let password = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 8; i += 1) {
    let index = randomIntGen();
    let char = chars[index];
    password += char;
  }
  return password;
};

export const formatNumToThreeDigitStr = (num) => {
  const numStr = num.toString();
  let prefix = '';
  for (let i = numStr.length; i < 3; i += 1) {
    prefix += '0';
  }
  return (prefix += numStr);
};

export const formatPrice = (price) => {
  let priceStr = !price || price === 0 ? '0.00' : `${price.toString()}`;
  const {length} = priceStr;
  if (length < 4) {
    for (let i = length + 1; i <= 4; i += 1) {
      priceStr += i === 2 ? '.' : '0';
    }
  }
  return priceStr;
};
