const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log('Deu erro')
//     });

async = Promise
// async function executePromise() {
//     const response = await minhaPromise();
//     console.log(response);
// }

//Arrow Function
const executePromise = async() =>{
    const response = await minhaPromise();
    console.log(response);
}

executePromise();