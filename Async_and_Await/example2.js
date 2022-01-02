// Using Async Await way (Good way for asynchronous programming)
// Real world example of Async & Await



// // Example 1:
const LoadData1 = async () => {                  // async keyword enables to run LoadData1 function asynchronously.

    try {

        const url = 'https://jsonplaceholder.typicode.com/todos';

        const res = await fetch(url);                // await keyword enables to wait for dta to be fetched

        if(res.status !== 200 )
        {
            throw new Error('Cannot Fetch or Access the data')
        }

        const data = await res.json();               // json response pathauna vanda pahila pani wait gareko cha

        return data;

    }
    catch (err) 
    {
        console.log(err)
    }

}


LoadData1()
.then((data) => console.log(data))
.catch((err) => {
    console.log('Error ', err.message)
})







// Example 2 : Async Await with promise.all() (handling all the request parallely.. i.e manaully 3 ta url batw data fetch garda 3 seconds lagthyo vani yesari Promise.all() tarikale garda only 1 second nai lagcha)
// Parallel handling of all the request

const LoadData2 = async () => {                  

    try {

        const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
        const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
        const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

        const results = await Promise.all([                         // sabai fetch(url) lai array vitra rakheko
            fetch(url1),
            fetch(url2),
            fetch(url3),
        ])

        const finalData = await Promise.all(results.map(result => result.json()));
        return finalData;

    }
    catch (err)
    {
        console.log(err)
    }

}


LoadData2()
.then((data) => console.log(data))
.catch((err) => {
    console.log('Error ', err.message)
})













