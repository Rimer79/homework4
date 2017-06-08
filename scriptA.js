// JavaScript File
/**
 * Created by 18 on 05.06.2017.
 */
 /*asyncMap(['a','b','c','d'],function (value, index, arr) {
    return new Promise(function (resolve) {
        //movie
        //resolve whith some result
    });
}) .then(function (resultArray) {
    //something
});
*/
var oldArray = ['a','b','c','d'];
var myArray = ['red', 'yellow','green', 'aqua'];

function plus(value,index,arr) {
    return new Promise(function (resolve) {
        var color = document.getElementById(value);
        color.style.backgroundColor = `${myArray[index]}`;
        var messege = `kub ${value} will be color ${myArray[index]}`;
        resolve(messege);
      console.log(messege);

    })
}
 //oldArray.map(plus);

function asyncMap(someArray,myFun) {
    return Promise.all(someArray.map((value,index,arr)=> new Promise(function (resolve) {
        resolve(myFun(value,index,arr))
    })
    ));
}

var result = asyncMap(oldArray, plus);
result.then(function(value) {
    console.log(value)
});