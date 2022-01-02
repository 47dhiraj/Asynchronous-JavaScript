// Example of callback hell (nested callback scenario vayo vani callback hell vanincha.. yehi kura lai solve garna promise aako ho)


const getBooks = (resource, callback) => {     

    const request = new XMLHttpRequest();               

    request.addEventListener('readystatechange', () => {        

        if(request.readyState === 4 && request.status === 200)
        {
            const data = JSON.parse(request.responseText)           
            callback(undefined, data)                 
        }
        else if(request.readyState === 4)
        {
            callback('could not fetch data from server ', undefined)  
        }

    })



    request.open('GET', resource)                   // dynamically different json file lai call garna ko lagi resource vanni varibale ma aai rako cha
    request.send()     

}


// Callback call vitra pani feri arko nested callback call ko scenario lai callback hell vanincha
getBooks('../XMLHttpRequest/books.json', (err, data) => { 
    console.log(data)
    getBooks('price.json', (err, data) => {              
        console.log(data)
    })   
})         
        




