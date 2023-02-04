// console.log("A");

// function printLog(callback) {

//     setTimeout(() => {
//         console.log("B")
//         callback();
//     }, 2000)
    
// }

// printLog(() => {
//     console.log("C");
// })

const url1 = 'https://brachio.site/download/first'; // 2 Detik
const url2 = 'https://trex.site/download/second'; // 4 Detik
const url3 = 'https://stego.site/download/third'; // 1 Detik

function downloadUrl(url, timer, callback) {
    setTimeout(() => {
        console.log(`Downloading from ${url}....`);
        callback();
    }, timer)
}

// CALLBACK HELL
downloadUrl(url1, 2000, () => {
    downloadUrl(url2, 4000, () => {
        downloadUrl(url3, 1000, () => {
            console.log("Download completed.....")
        })
    })
})

function downloadPromise(url, timer) {

    return new Promise((resolve, reject) => {
        // resolve ==> Successfull scenario
        setTimeout(() => {
            resolve(`Downloading from ${url}....`)
        }, timer)
        // reject ==> Failed scenario
    })
}

async function downloadWithAsync() {
    try {

        const downloadURL1 = await downloadPromise(url1, 2000);
        console.log(downloadURL1)
        
        const downloadURL2 = await downloadPromise(url2, 4000);
        console.log(downloadURL2)

        const downloadURL3 = await downloadPromise(url3, 1000);
        console.log(downloadURL3)
        console.log("Download complete")
    } catch(err) {
        console.log(err);
    }
}

downloadWithAsync();

// downloadPromise(url1, 2000)
//     .then(result => {
//         console.log(result)
//         return downloadPromise(url2, 4000)
//     })
//     .then(result => {
//         console.log(result)
//         return downloadPromise(url3, 1000)
//     })
//     .then(result => {
//         console.log(result)
//         console.log("Download complete")
//     })

// setTimeout(() => {
//     console.log(`Downloading from ${url1}....`);
// }, 2000)

// setTimeout(() => {
//     console.log(`Downloading from ${url2}....`);
// }, 4000)

// setTimeout(() => {
//     console.log(`Downloading from ${url3}....`);
// }, 1000)