const results = [{
    first: "Eliud",
    last: 'Kipchoge',
    country: 'kenya',
 

},

{
    first: "Feyisa",
    last: 'Rupp',
    country: 'Ethiopia'
   

},


{
    first: "Galen",
    last: 'Chogechoge',
    country: 'United States'
  

},

]

const [{first: goldWinner}, {country}] = results
console.table(goldWinner)
console.table(country)