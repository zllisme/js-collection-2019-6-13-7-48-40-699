'use strict';

function grouping_count(collection) {
  let result = {};
  for(let i = 0; i < collection.length; i++) {
      let each = collection[i]; 
      result[each] = (result[each] +1 ) || 1; 
  }
  return result;
}

module.exports = grouping_count;
