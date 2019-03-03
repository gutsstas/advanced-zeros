module.exports = function getZerosCount(number, base) {

  let count = 0;
  var arr = new Array();
  var arr1 = new Array();
  var arr2 = new Array();
  var j = 0;
  var i = 2;
  do{
    if (base % i == 0) {
      arr[j] = i;
      j++;
      base = base / i;
    }
    else i++;
  }
  while (i <= base);
  let zeros = 0;
  let num = number;
  for (let z = 0; z < arr.length; z++) {
    while (num > arr[z]){
      num/= arr[z];
      zeros+=Math.floor(num)
    }
      arr1.push(zeros);
      zeros = 0;
      num = number;
  }
  let element;
  for (let y = 0; y < arr1.length; y++) {

      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] == arr1[y]) count++;
      }
      element = arr1[y]/count;
      count = 0;
      arr2.push(Math.floor(element));
    }
    Array.min = function( array ){
      return Math.min.apply( Math, array );
    }
    return Array.min(arr2);
}
