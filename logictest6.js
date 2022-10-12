
// logit test soal nomor enam
// "I am A Great human"
// into
// "I ma A Taerg namuh"

// // note: observe the Capital word behavior. Capital only when in the first letter

function reverseWord(){

let nama = "I am A Great human";
balikNama = ""
//buat supaya nama[i] berawal dari paling huruf paling belakang (length) ke huruf paling depan
for (var i = nama.length-1 ; i >= 0; i--) {
 balikNama += nama[i];
}
    console.log(balikNama)
};
reverseWord();