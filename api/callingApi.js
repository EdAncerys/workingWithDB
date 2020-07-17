'use-strict';

(async function callingApi() {
  let url = 'http://jsonplaceholder.typicode.com/users/1';

  let resp = await fetch(url).catch(handleErr);
  let data = await resp.json();

  if (data.code && data.code == 400) {
    return;
  }
  console.log(data);
})();

function handleErr(err) {
  console.warn(err);
  let resp = new Response(
    JSON.stringify({
      code: 400,
      message: 'Stupid network Error',
    })
  );
  return resp;
}

// Promises
let promise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

promise
  .then((message) => {
    console.log('Promise resolved ' + message);
  })
  .catch((err) => {
    console.log('Promise rejected ' + err);
  });

// Replacing callbacks with promise example
let userLeft = false;
let userRight = false;

function tutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User left',
        message: ':(',
      });
    } else if (userRight) {
      reject({
        name: 'User Right',
        message: ':D',
      });
    } else {
      resolve('This Promise been resolved');
    }
  });
}

tutorialPromise()
  .then((message) => {
    console.log('Success ' + message);
  })
  .catch((error) => {
    console.log(error.name + ' ' + error.message);
  });
