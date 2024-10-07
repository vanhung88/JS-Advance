// callback
// Before ES6 we were using callbacks to handle asynchronous operations.
// trong ham event js (click, change) pass Callback

function getNumberApi(callback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    });
}
function handleData(data) {
  //// handle data form api
  return [];
}
// getNumberApi(handleData);

// ----------------------------------------------------//

//khi dùng callback dễ bị callback hell , khó nhìn , rối . ES6 ra mat Promises để giải quyết vấn đề callback hell
// dung từ khóa new tạo Promise , nhận vào excutor function, trong excutor có 2 tham số resolve/reject
// sau khi co promise, dung với những phương thức:
// then , catch , finally
// A Promise can go through three states:
// Pending
// Fulfilled
// Rejected

const promises = new Promise((resolve, reject) => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
      resolve(json);
    });
});
promises
  .then((data) => {
    // console.log(data);
    return data;
  })
  .then((data) => {
    // console.log(data);
  });

// dùng promise khi then then nhiều => promises chaining
//es7 ra mat async-await
// trong ham async, khi return => tự đưa vào promise
// await : là chờ thực thi async function
// await Promise.all([]): chay tat ca async function 1 luc ( neu có 1 promises lỗi thì => lỗi)
// await Promise.allSettled([]): chay tat ca 1 luc ( success or error deu dc)
// await Promise.any([]): tra ve 1 promises thanh cong dau tien ( )

const getListData = async () => {
  return '123';
};

(async () => {
  const data = await getListData();
  console.log(data);
  console.log('lasdlasd');
})();
