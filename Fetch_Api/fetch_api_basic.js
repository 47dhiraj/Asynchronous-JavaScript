// Fetch API Basic Example

fetch('../XMLHttpRequest/books.json')
.then(response => {

    console.log('Data fetched.', response)
    
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log('Rejected:', err)
})