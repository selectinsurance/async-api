const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async OK'), 3000)
            : reject(new Error('Async Failed'))
    });
}


const anotherAsync = async () => {
    const {promise} = await fnAsync();
    console.log(promise);
    console.log('Finished');
}
console.log('Before');
anotherAsync();
console.log('After');