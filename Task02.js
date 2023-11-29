'use strict'

const getAverageValue = (arr) => {
    if (arr.length === 0) return 0;

    const total = arr.reduce((sum, value) => sum + value, 0);
  
    return Math.floor(total / arr.length);
  }
  
  const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
  const averageCheck = getAverageValue(allCashbox);
  
  console.log(averageCheck); 