/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {

  if (arr.length > 3) {
    return (arr[0] + (arr.length - 1)) / arr.length 
  } else {
    return null
  }

}

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
   return arr.concat(arr) 
  

}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
  if (arr.length > 4) {
    arr.splice(0, 2)
    return arr
  } else {
    let arr = []
    return arr
  }
  
    
}

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
