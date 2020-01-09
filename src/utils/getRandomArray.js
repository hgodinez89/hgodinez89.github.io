function getRandomArray (arraySize) {
  let numbers = arraySize
  let myArray = []

  while(myArray.length < numbers){
    var ramdomNumber = Math.ceil(Math.random() * numbers)
    var exists = false
    for (var i = 0;i < myArray.length;i++) {
      if (myArray[i] === ramdomNumber) {
        exists = true
        break
      }
    }
    if (!exists) {
      myArray[myArray.length] = ramdomNumber
    }
  }

  return myArray
}

export default getRandomArray
