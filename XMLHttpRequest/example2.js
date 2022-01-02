// Example for understanding Callback function with asynchronous js concept


// yo getTodos vanni function definition ko vitra ko code chai asynchronous tarikale le exectue vai rako cha because event listen garera basi rako cha and jaba event occur huncha taba matra vitra ko code exectue huncha... tetinjel samma yo function definitiion ko kei run hudaina baru remaining code run huncha 
const getTodos = (callback) => {                // callback function lai as parameter ko rup ma receive gareko

    const request = new XMLHttpRequest();               

    request.addEventListener('readystatechange', () => {        

        if(request.readyState === 4 && request.status === 200)
        {
            callback(undefined, request.responseText)                  // callback function lai call gareko with parameter
        }
        else if(request.readyState === 4)
        {
            callback('could not fetch data from server ', undefined)   // callback function lai call gareko with parameter
        }

    })



    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')      
    request.send()     

}


// For showing asynchronously execution

console.log(1)

console.log(2)

getTodos((err, data) => {               // getTodos function vitra auta callback function cha having no name, and yo callback function sanga duita parameter cha i.e err & data

    console.log('callback fired')

    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }

})            
        
console.log(3)

console.log(4)



