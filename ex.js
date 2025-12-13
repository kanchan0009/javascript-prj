// var num = 100;
// if(num %2 == 0){
//     alert(`The number ${num}is even`);
// }
// else{
//     alert(`The number${num}is odd`);
// }

// var wt = parseInt(prompt('Enter your weight'));
// var ht = parseInt(prompt('Enter your height'));
document.getElementById("calc").addEventListener("click",function(){
     var wt = document.getElementById("weight").value;
var ht = document.getElementById("height").value;
 var BMI = wt/(ht *ht);
var result="";
if(BMI <18.5){
    result= "underweight";
}
else if(BMI>= 18.5 && BMI < 25){
    result = "normal weight";
}
else if(BMI >=25 && BMI< 30){
    result="overweight";
}
else if(BMI >= 30){
    result = "obese";
}
alert ( `Your BMI is ${BMI}. You are ${result}`);
});
