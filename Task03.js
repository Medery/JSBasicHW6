'use strict'

const addPrefix = (arr, prefix) => {
    return arr.map(name => `${prefix} ${name}`);
  }

  const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
  const prefixedNames = addPrefix(names, 'Mr');
  
  console.log(prefixedNames);
  