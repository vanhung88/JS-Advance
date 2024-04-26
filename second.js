const findSecondNumber = (arr) => {
  let largest = null;
  let second = null;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > second) {
      second = arr[i];
    }
  }
  console.log(second);
};

findSecondNumber([0, 5, 7, 8, 4, 10]);
