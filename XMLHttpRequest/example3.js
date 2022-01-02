// Example for working and understanding with JSON data in better way



const getTodos = (callback) => {               
    const request = new XMLHttpRequest();               

    request.addEventListener('readystatechange', () => {        

        if(request.readyState === 4 && request.status === 200)
        {
            const data = JSON.parse(request.responseText)           // JSON string lai Javascript object ma convert garna ko lagi parse() method ko use garincha
            callback(undefined, data)                 
        }
        else if(request.readyState === 4)
        {
            callback('could not fetch data from server ', undefined)  
        }

    })



    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/') 
    
    request.open('GET', 'books.json')     
    request.send()     

}



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
        




