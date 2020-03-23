// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let result = [];
  let node = document.body;
  var recurse = function(element) {
    let classList = element.classList;
    if (classList && classList.contains(className)) {
      result.push(element);
    }
    if (node.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        recurse(element.childNodes[i]);
      }
    }
  };
  recurse(node);
  return result;
};


// var getElementsByClassName = function(className) {
//   // your code here
//   let result = [];
//   let node = document.body;
//   function recurse (element) {
//     let classList = element.classList
//     if (classList && classList.contains(className)) {
//       result.push(element);
//     }
//     if(element.childNodes !== undefined) {
//       for (let node in element.childNodes) {
//         recurse(element.childNodes[node]);
//         }
//       }
//     }
//     recurse(node);
//     return result;
// };
