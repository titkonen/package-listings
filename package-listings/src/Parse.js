import React from 'react';

var str = `
  A.         Category one
  1.          item one
  2.          item two
  B.         Category two
  3.          item three
  4.          item four
  C.         Category three
  5.          item five
  6.          item six
`;

function Parse(strArg) {

   var
      category,
      output = {},  // Output
      str = strArg.trim();  // Remove unwanted space before processing

   str.split('\n').forEach(function(line) {
      var item = line.split('.');
      if (item[0].match(/\d/)) {  // Match a decimal number
         // Remove unwanted space & push
         output[category].push(item[1].trim());
      } else if (item[0].match(/\D/)) {  // Match UPPERCASE alphabet
         // Remove unwanted space
         category = item[1].trim();
         output[category] = []
      }
      });
 return output;
}  

export default Parse;

// Final output Array
var finalOutput = [];
// Parse input string
var parseStr = Parse(str);

finalOutput.push(parseStr);

// Desired JSON output
console.log(JSON.stringify(finalOutput));