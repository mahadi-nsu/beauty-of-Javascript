const animals = [
    "🐤🐤🐤",
    "🐕🐕🐕🐕",
    "😹😹",
    "🐺🐺🐺🐺🐺"
    ]
    
    animals.map(animal=>{
      console.log(animal.length);
    })
    
    //same  
    animals.map(({length})=>
    console.log(length)
    )