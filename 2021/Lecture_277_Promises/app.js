const changeColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(`changed color to ${color}`);
        }, delay);
    });
};

changeColor('green', 2000)
    .then((data) => {
        console.log(data);
        return changeColor('red', 2000);
    })
    .then((data) => {
        console.log(data);
        return changeColor('yellow', 2000);
    })
    .then((data) => {
        console.log(data);
        return changeColor('blue', 2000);
    })
    .then((data) => {
        console.log(data);
        return changeColor('orange', 2000);
    })
    .then((data) => {
        console.log(data);
        return changeColor('violet', 2000);
    })
    .then((data) => console.log(data))
    .catch(() => console.log('Something went wrong'));
