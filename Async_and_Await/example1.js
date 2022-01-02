// async and await allows to chain promises together in much clean and better way

// Yo talako normal arrow function ho
// const getBooks = () => {
// }


// Asynchronous function vannale non blocking code or background ma execute hune program ho ,,, yesle aru remaining program ko execution lai block gardaina

// Note : kunai pani asynchronous function banauna cha vani .. parenthesis(small bracket) ko agadi async keyword rakhni
// Note : asynchronous function always returns a promise.

const getBooks = async () => {                                      // getBooks vanni asynchronous function ho jasle promise return garcha

    const response = await fetch('../XMLHttpRequest/books.json');   // fetch() function le promise dincha (either resolve or reject) so time lincha tei vayera promise aaune wala cha vani await keyword ko use garincha (i.e promise na aaye samma wait garera bascha)
    let data = await response.json()                                // response.json() le JSON as input lincha and javascript object ma convert garcha    // response.json() le pani promise return garcha so tei vayera time lini vako vayera await keyword use gareko
     // console.log(data)

    const price = await fetch('../Callback_hell/prices.json'); 
    data = await price.json() 

    return data                                                     // promise return huncha

}





// Yo talako console haru chai for checking if the getBooks() method is actually executing asynchronously or not
console.log(1)
console.log(2)



getBooks()
.then((data) => {
    console.log(' List of Books & their Price :', data)
})
.catch((err) => {
    console.log('Error Message :', err.message)
})


console.log(3)
console.log(4)






