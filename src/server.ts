import int from './time';

setTimeout(() => {
    console.log('in time!');
    clearInterval(int);
}, 3000);

console.log(__dirname);
console.log(__filename);
