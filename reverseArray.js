const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((reversed, current) => {
  return [current, ...reversed];
}, []);

console.log(reversedArr); 