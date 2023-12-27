const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((element) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(element)) {
        newArray.push(element);
      }
    });
    // and return that array
    return newArray;
  };

console.log(removeFromArray([1, 2, 3, 4,], 3))

// Do not edit below this line
module.exports = removeFromArray;

// Implement a function that takes an array and some other arguments then removes the other arguments from that array

// SET two parameters (array, ...args) for removeFromArray
//   SET newArray variable to empty array
//      SET forEach to go through array
//          THEN push every element to new array
//              IF current element is NOT included in the args
//                  THEN only push elements into new array
//              END IF