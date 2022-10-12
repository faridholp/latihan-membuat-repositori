// Alternate each case of each of string given 

// alternateCase("abc")            => "ABC"
// alternateCase("ABC")            => "abc"
// alternateCase("Hello World")    => "hELLO wORLD"

let alternateCase = "abc" ;
console.log(alternateCase.toUpperCase());
alternateCase= "ABC" ;
console.log(alternateCase.toLowerCase());
alternateCase = "Hello World";
alt = ""
for (var i = 0 ; i < alternateCase.length ; i++){
    if (alternateCase[i] === alternateCase[i].toUpperCase()){
        alternateCase[i].toLowerCase();
    }
    else{
        alternateCase[i].toUpperCase();
    }

        console.log(alternateCase[i])
    }
