
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
     if (!matrix) {
      return [];
    }
    const a = [];
      matrix.forEach((item, i) => {
          if (i % 2) {
              a.push(...item.reverse().splice(''));
          } else {
              a.push(...item.splice(''));
          }
      });
      return a;
  }
  

