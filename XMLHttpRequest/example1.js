const request = new XMLHttpRequest();               // Creating xmlhttprequest object


request.addEventListener('readystatechange', () => {        // yo event listen gareko


    // console.log(request, request.readyState)             // consoling all 4 states of a request

    if(request.readyState === 4 && request.status === 200)
    {
        console.log(request.responseText);
    }
    else if(request.readyState === 4)
    {
        console.log('All 4 request states is coompleted but could not get the data.')
    }

})


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')      // setting up the request

request.send()                                      // yo line le actually request send garcha


