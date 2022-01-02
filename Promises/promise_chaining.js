// Example of Promise Chaining


const getBooks = (resource, callback) => {     

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();               

        request.addEventListener('readystatechange', () => {        

            if(request.readyState === 4 && request.status === 200)
            {
                const data = JSON.parse(request.responseText)           
                resolve(data)
            }
            else if(request.readyState === 4)
            {
                reject('Error accessing the data')
            }

        })

        request.open('GET', resource)                   
        request.send()   

    })

}



// Yo chai Promise Chaining gareko
getBooks('../XMLHttpRequest/books.json')
.then(data => {

    console.log('Books Data Fetched: ', data)

    return getBooks('../Callback_hell/price.json')

})
.then(data => {

    console.log('Book Price Fetched: ', data)

})
.catch(err => {

    console.log('Promise Rejected: ', err)
})



