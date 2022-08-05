let book=["toi thay hoa vang tren co xanh","dac nhan tam"];
let cart = [];
let a = prompt(" mua toi thay hoa vang tren co xanh chon 1, mua dac nhan tam chon 2" );
if (a==1 ){
cart.push (book[0]);
console.log(cart);
alert ("ban da mua thanh cong");
}else if(a==2){
   cart.push(book[1]);
   console.log(cart);;
   alert ("ban da mua hang thanh cong");
}else {
   alert (" sanr pham khong cos trong cua hang");
}