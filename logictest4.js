// ```jsx
// Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed

// solution (10) // => 23 = 3 + 5 + 6 + 9
// solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
// ```
let input= 10;
multiple3 = 0;
multiple5 = 0;
for (var i = 0 ; i < input ; i++ ){
    if (i % 3 == 0){
        multiple3 = multiple3 + i ;
    }
    else if (i % 5 == 0){
        multiple5 = multiple5 + i
    }
    jumlah = multiple3+multiple5 
}
console.log(jumlah);
