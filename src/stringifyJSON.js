// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let output = [];
  let newObj = {};

  //null
  if (obj === null || obj === Infinity || obj === NaN) {
    return 'null';
  }
  //Boolean
  if(typeof obj ==='boolean') {
    return obj.toString();
  }
  //Number
  if(typeof obj ==='number') {
    return obj.toString();
  }
  //string
  if(typeof obj ==='string') {
    return `"${obj}"`;
  }

  //array
  if(Array.isArray(obj)) {
    if(obj.length<0) {
      return '[]';
    } else {
      for (let i = 0; i < obj.length; i++) {
        output.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + output + ']';
  }

  //object
  if(typeof obj ==='object') {
    if(Object.keys.length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        if(typeof obj[key] ==='function' || typeof obj[key] ==='symbol' || typeof obj[key]==='undefined') {
          //return null;
        } else {
          output.push(`"${key}":${stringifyJSON(obj[key])}`);
        }
      }
    }
    newObj = `{${output}}`;
    return newObj;
  }
};


// var stringifyJSON = function(obj) {
//   var output = [];
//   if (typeof obj === 'function' || obj == undefined) {
//     return 'null';
//   }
//   if (typeof obj === 'number' || typeof obj === null || typeof obj === 'boolean') {
//     return '' + obj;
//   } else if (typeof obj === 'string') {
//     return '"' + obj + '"';
//   } else if (Array.isArray(obj)) {
//     if (obj[0] === undefined) {
//       return '[]';
//     } else {
//       for (var i = 0; i < obj.length; i++) {
//         output.push(stringifyJSON(obj[i]));
//       }
//         return '[' + output + ']';
//     }
//   }
//   if (obj.constructor === Object) {
//     var propCount = Object.keys(obj).length;
//     for (var key in obj) {
//       propCount--;
//       var k = stringifyJSON(key);
//       var v = stringifyJSON(obj[key]);
//       if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function' ) {
//         console.log(typeof obj[key])
//         if (propCount > 0) {
//           output.push('',k, ':', v,',');
//         } else {
//           output.push('',k, ':', v,'');
//         }
//       }
//     }
//     output.unshift('{');
//     output.push('}');
//     return output.join('');
//   }
// };