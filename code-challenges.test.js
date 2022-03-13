// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// a describe method that lists the name of the function OR naming of the particular test.
describe("arrayShuffler", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("removes the first item from the array and shuffles the remaining content.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(arrayShuffler(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
  })
})

// arrayShuffler › removes the first item from the array and shuffles the remaining content.
// ReferenceError: arrayShuffler is not defined
// Good fail

// b) Create the function that makes the test pass.

// Declare a function called arrayShuffler that will take in one parameter, array.
// Within the function, utilize the .shift() method which will remove the first index of the array.
// Set up a  for loop after the .shift() method with the usual for loop conditions of i=0; i<array.length; i++
// Inside the for loop, declare a variable called randomNum and set it equal to Math.floor(Math.random()*array.length). Math.random() is a built-in method in JavaScript that generates a random number and it is multiplied by array.length to make the overall function more dynamic. Math.floor() makes it so that the random number will be rounded DOWN to the nearest whole number so that we won't have to deal with any decimals.
// Set up another variable called temp which will be assigned to the value of array at index i.
// Next, have the value of array at index i equal to the value of array at the index of randomNum.
// This is the shuffling portion of the function since i will keep updating as the for loop runs and the value at each index will be set to array[randomNum] each time.

const arrayShuffler = (array) => {
  array.shift()
  for(let i = 0; i < array.length; i++){
    let randomNum = Math.floor(Math.random()*array.length)
    let temp = array[i]
    array[i] = array[randomNum]
    array[randomNum] = temp
  }
  return array
}

// The test passed (green) :D


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("minMax", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns an array of the minimum and maximum numbers in that order.", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

// ● minMax › returns an array of the minimum and maximum numbers in that order.
// ReferenceError: minMax is not defined
// Good fail

// b) Create the function that makes the test pass.

// Declare a function called minMax which will take in one parameter, array.
// Within the function, declare a new variable called newArray which will be set to an empty array. My general plan is to somehow extract the lowest and highest values of the given array and use the .push() method to insert the values into the empty array and return the array at the end.
// After doing some research, I found the built-in methods Math.min and Math.max which will provide me with the minimum and maximum value from a set of numbers, respectively.
// However, the Math.min and Math.max methods only work on the data type of numbers and not arrays, which is the data type that we are working with.
// My next approach was to figure out a way to convert the given array into a set of numbers which is where I read up on the '...' which is a destructuring assignment syntax. This makes it possible to extract data from array into variables.
// Declare two variables, min and max, and set them equal to Math.min(...array) and Math.max(...array), respectively. The '...' will convert the array into separate pieces of data making it possible to store the minimum and maximum values into variables.
// Use the .push() method to push the min and max value in the newArray in that order exactly since the goal is to return an array with the min max value in order.
// Finally, return newArray.

const minMax = (array) => {
  let newArray = []
  let min = Math.min(...array)
  let max = Math.max(...array)
  newArray.push(min)
  newArray.push(max)
  return newArray
}

// The test passed (green) :D

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("noDuplicates", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns one array with no duplicate values.", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// noDuplicates › returns one array with no duplicate values.
// ReferenceError: noDuplicates is not defined
// Good fail


// b) Create the function that makes the test pass.

// Declare a function called noDuplicates which will take in two parameters, array1 and array2.
// Within the function, declare a variabled called combinedArray and set it equal to array1.concat(array2) so that we only have to work with one long array rather than two separate arrays. This will make it easier to use the .filter() method since we only have to focus on one array.
// Declare a variabled called uniqueArray and set it equal to the filter() method with the parameters of value and index.
// Inside the code block for filter(), return only the values where index of that value is strictly equal to the current index by implementing the .indexOf() method. The logic behind this line of code is taking advantage of the .indexOf() method because using this method will return the index of value of where it FIRST appears, meaning that if there are any duplicates within an array, calling the indexOf() method would only return the index of where it initially appears. This makes it so that any duplicates are not returned.
// Finally, return the uniqueArray.

const noDuplicates = (array1, array2) => {
  let combinedArray = array1.concat(array2)
  let uniqueArray = combinedArray.filter((value,index) => {
    return combinedArray.indexOf(value) === index
  })
  return uniqueArray
}
