// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(');
//         } else {
//             success(`Here is the data from ${url}`);
//         }
//     }, delay);
// };

// fakeRequestCallback(
//     'books.com',
//     function (data) {
//         console.log('Success!!!');
//         console.log(data);
//     },
//     function (err) {
//         console.log('ERROR');
//         console.log(err);
//     }
// );
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

fakeRequestPromise('myownapp.com/page1')
    .then((data) => {
        console.log('Request Successful!');
        console.log(data);
        return fakeRequestPromise('myownapp.com/page2');
    })
    .then((data) => {
        console.log('2-nd Request Successful!');
        console.log(data);
        return fakeRequestPromise('myownapp.com/page3');
    })
    .then((data) => {
        console.log('3-rd Request Successful');
        console.log(data);
    })
    .catch((err) => {
        console.log('Something went wrong');
        console.log(err);
    });
