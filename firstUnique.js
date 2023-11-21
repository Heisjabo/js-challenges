const findFirstUniqueNumber = (arr) => {
    // Create an object to store the frequency of each number
    const frequency = {};
  
    // Iterate through the array and update the frequency
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    // Iterate through the array again to find the first unique number
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (frequency[num] === 1) {
        return num; // Found the first unique number
      }
    }
  
    return null; // If no unique number is found
  }

  module.exports = findFirstUniqueNumber;
  

 
  