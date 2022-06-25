const promise = new Promise((resolve, reject) => {

    resolve('Success');

});
pays = 9;
console.log(pays);
const countPays = new Promise((resolve, reject) => {
    if (pays > 10) {
        resolve('Success! You have more than 10 pays');
    } else {
        reject('You have less than 10 pays');
    }
})

countPays.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
}
);