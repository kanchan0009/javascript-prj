document.getElementById("button").addEventListener("click",function(){
    var mark = document.getElementById("marks").value;
    let result="";
    if(mark>=90 && mark <100){
         result = "Outstanding";
    }
    else if(mark >=80 && mark <90){
        result = "Excellent";
    }
    else if(mark >=70 && mark < 80){
        result = "Very Good";
    }
    else if(mark >=60 && mark < 70){
        result = " Good";
    }
    else if(mark >=50 && mark < 60){
        result = "Satisfactory";
    }
    else if(mark >=40 && mark < 50){
        result = "Acceptable";
    }
    else if(mark >=35 && mark < 40){
        result = "Basic";
    }
    else{
        result="Not graded";
    }
    alert(`Your marks is ${mark} . Your performance is ${result}`);

});



