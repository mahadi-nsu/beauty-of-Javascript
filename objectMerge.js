//object merge

let player = {
    'name' : 'Mahadi',
    'age' : 25
  }
  
  let stats = {
    'hitPoint' : 10,
    'attack' :12
  }
  
  //merge first approach
  //shallow merge
  
  let level = Object.assign({},player,stats);
  console.log(level);
  
  //second approach
  let level1 = {...player,...stats}