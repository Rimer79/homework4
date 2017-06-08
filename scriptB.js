// JavaScript File
/**
 * Created by 18 on 08.06.2017.
 */
var oldArray = ['a','b','c','d'];
var myArray = ['red', 'yellow','green', 'aqua'];

function plus(val,index,arr) {
    return new Promise(function (resolve) {
        var color = document.getElementById(val);
        color.style.backgroundColor = `${myArray[index]}`;
        var messege = `kub ${val} will be color ${myArray[index]}`;
        resolve(messege);
          console.log(messege);

    })
}
//oldArray.map(plus);


function asyncMapB(someArray, myFun) {
    return new Promise(function(resolve) {
        var chain = Promise.resolve();
        var results = [];
        someArray.forEach((function(val, index, arr) {
            chain = chain
                .then(() => myFun(val, index, arr))
                .then((result) => {
                    results.push(result);
                });
        }));
        chain.then(() => {
            resolve(results);
        });
    })

};


 var result = asyncMapB(oldArray, plus);
result.then(function(value) {
    console.log(value)
});