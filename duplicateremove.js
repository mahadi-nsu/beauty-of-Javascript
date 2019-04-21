const animals = [
    "🐤",
    "🐕",
    "😹",
    "🐺",
    "🐤",
    "🐺"
    ]

//using filter    
let unique = animals.filter((animal,index)=>{
  return(animals.indexOf(animal)==index)});
console.log(unique);
//["🐤","🐕","😹","🐺"]


//Using set
console.log([...new Set(animals)]);
//["🐤","🐕","😹","🐺"]