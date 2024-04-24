// callback
// Before ES6 we were using callbacks to handle asynchronous operations.

function getNumberApi() {
  let arr = [];
  setTimeout(() => {
    arr = [1, 2, 3];
    // console.log(arr);
  }, 1000);
  return arr;
}
console.log(getNumberApi());
console.log('api');
