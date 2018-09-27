function multiplyArray(array) {
  let newArray = array.map(elem => elem * 3);
  return newArray;
}
let array = [1, 2, 3];
console.log(multiplyArray(array));