const int = setInterval(() => {
    console.log('In interval');
}, 1000);

setTimeout(() => {
    console.log('in time!');
    clearInterval(int);
}, 3000);
