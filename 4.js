
var len =prompt("Enter size of array : ");
      var input = prompt("Enter numbers separated by spaces:");
let arr = input.split(" ");

       let doubleofarr=arr.map(function(num){
        return 2*num;
       });
       let evennos=doubleofarr.filter(function(num){
        return num%2===0
       });
       console.log("Even numbers are : ");
       for(var i=0;i<len;i++)
       console.log(evennos[i]);
       
