const example_object = {
    frog :"🐸",
    cat : "🐱",
    chicken: "🐤"
  }
  //give simple pattern
  console.log(JSON.stringify(example_object));
  //give a nice pattern
  console.log(
    JSON.stringify(example_object,null,2)
    )
  