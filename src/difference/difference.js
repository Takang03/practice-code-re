export const difference = (firstArray, secondArray) => {
  let mySolution = [];

  for (let myNum of firstArray) {
    if (!secondArray.includes(myNum) && !mySolution.includes(myNum)) {
      mySolution.push(myNum);
    }
  }

  return mySolution;
};
