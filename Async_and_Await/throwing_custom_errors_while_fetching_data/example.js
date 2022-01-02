// example for throwing custom error initially if error occurs while fetching data

const getBooks = async () => {                                      // getBooks vanni asynchronous function ho jasle promise return garcha

    const response = await fetch('../../XMLHttpRequest/books.json');   // fetch() function le promise dincha (either resolve or reject) so time lincha tei vayera promise aaune wala cha vani await keyword ko use garincha (i.e promise na aaye samma wait garera bascha)
    
    if(response.status !== 200 )
    {
        throw new Error('Cannot Fetch or Access the data')
    }
    
    const data = await response.json()                                // response.json() le JSON as input lincha and javascript object ma convert garcha    // response.json() le pani promise return garcha so tei vayera time lini vako vayera await keyword use gareko
    return data                                                     // promise return huncha

}


getBooks()
.then((data) => {
    console.log(' List of Books & their Authors :', data)
})
.catch((err) => {
    console.log('Error ! ', err.message)
})









