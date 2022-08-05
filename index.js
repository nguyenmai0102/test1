// // // // let i= 1;
// // // // while(i <10){
// // // //     console.log("i = 5");
// // // //     i++;
// // // // }

// // // let n = prompt("nhap so bat ki vo day");
// // // let sum=1;
// // // for (let i=1; i<=n; i++){
// // // sum=sum*i;
// // // console.log("111",sum);
// // // } 
// // // console.log("222",sum);
// // //shift alt +a

// // /* let n = prompt(" dien so nao vao day ");
// // let result = 0;
// // for(let i= 1; i<=n; i++){
// //    result = result +(1/i)*1/(i+1);
// //    console.log(result);
// // }
// // console.log(result); */



// // /* const number = prompt('Enter the number of terms: ');
// // let n1 = 0, n2 = 1, nextTerm;
// // for (let i = 1; i <= number; i++) {
// //     console.log(n1);
// //     nextTerm = n1 + n2;
// //     n1 = n2;
// //     n2 = nextTerm;
    
// // } */

// // /* let n = prompt("dien gi do vo day");
// // let a1 = 0;
// // let a2 = 1;
// // let result = 0;
// // for(let i =0; i <=10; i++){
// //     result = a1 +a2;
// //     a1=a2;
// //     a2=result;
// //     console.log(result);


// // } */

// // // for(let i =2 ; i<=5 ;i++){
// // //     for(let j=3;j<6;j++){
// // //         console.log(j); 
// // //     }
// // // }
// // //  \n 

// // /* for(let i=1; i<=4;i++){

// //   for (let j = 1; j <=i; j++) {
// //    console.log("*");
   
// //   }
// //   console.log("\n");


// // //let players = [6, 8, 9, 5, 4];
// // //console.log(players.length);
// // //console.log(players[1]);

// // //let names = ["conan", "inu", "haibara"];
// // //console.log(names.length);
// // //console.log(names[2]);
// // /* names.push("mai");
// // console.log(names);

// //  */

// // /* let motoBike = ["honda","suzuki","yamaha","kawasaki","ducati", "triumte"];
// // motoBike[2]= "haneda";
// // console.log(motoBike);
// //  */

// // /* let cauThu = ["Ronaldo", "Messi", "Neymar"];
// // let doiTen = prompt('có muốn nhập thay đổi tên cầu thủ nào không bằng cách nhập "Y" hoặc "N"');
// // if (doiTen == "y") {
// // let changeName = prompt("vị trí của cầu thủ muốn thay đổi tên.  0 thì sẽ là Ronaldo, nhập 1 thì sẽ là Messi, Nhập 2 thì sẽ là Neymar");
// // if(changeName== 0){
// // let a1= prompt("nhap ten cau thu moi");
// // cauThu[0]=a1;
// // console.log(cauThu);
// // }else if(changeName ==1){
// // let a2 = prompt("nhap ten cau thu moi");
// // cauThu[1]=a2;
// // console.log(cauThu);
// // }else if(changeName ==2){
// // let a3 = prompt(" nhap ten cau thu moi");
// // cauThu[2]=a3;
// // console.log(cauThu);
// // }
// // } else if (doiTen == "n") {
// //     alert("Good Bye!");
// // } */

// // // let monAn = ["com", "canh", "ca", "cas", "ga"];
// // // monAn.unshift("chaos");
// // // console.log(monAn);

// // // Ex1:
// // // Cho một mảng
// // //let todoList = ["Do homework at 8pm", "Read document at 12pm"];
// // // Tạo một ứng dụng todo list
// // // Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// // // Khi người dùng nhập vào
// // // C --- Cho người dùng nhập vào nội dung của todo mới
// // //   --- Thêm todo mới đó vào cuối mảng
// // //   --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
// // //                                                  2. Read....
// // // R --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
// // //                                                  2. Read....
// // // U --- Hỏi người dùng vị trí của todo muốn update
// // //   --- Cho người dùng nhập vào nội dung mới của todo muốn update
// // //   --- Tiến hành update
// // //   --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
// // //                                                  2. Read....
// // // D --- Hỏi người dùng vị trí của todo muốn xoá
// // //   --- Tiến hành xoá
// // //   --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
// // //                                                  2. Read....
// // // E --- Biến chương trình thành một vòng lặp vĩnh cửu và khi người
// // //       dùng nhập vào E thì thoát khỏi chương trình




// // //"\n"

// /* let toDoList = ["Do homework at 8pm", "Read document at 12pm"];
// let a1 = prompt ("dien 1 trong 5 chu cho C/R/U/D/E/ vao day");
// if(a1=="C"){
//     let a2 = prompt ("may hay dien noi dung moi vao day");
//     toDoList.push(a2);
//     console.log(toDoList);
//     for(let i=1; i<=1; i++);
//     console.log("1: do homework at 8pm");
//     console.log("2:Read document at 12pm");
//     console.log("3: a2");
// }else if(a1=="R"){
//     console.log("1: do homework at 8pm");
//     console.log("2:Read document at 12pm");
// }else if(a1=="U"){
//     let cauHoi = prompt("muon thay doi vi tri nao 0 hoac 1 ");
//     if (cauHoi == 0){
//         let cauHoiMoi = prompt("dien noi dung muon thay doi");
//         toDoList[0]=cauHoiMoi;
//         console.log(cauHoiMoi);
//         console.log("Read document at 12pm");
//     }else if (cauHoi == 1){
//         let cauHoiMoi1 = prompt("dien noi dung muon thay doi");
//         toDoList[1]= cauHoiMoi1;
//         console.log("do homework at 8pm");
//         console.log(cauHoiMoi1);
//     }
// }else if(a1=="D"){
//     let muonXoa = prompt (" mmuon xoa vi tri 0 hay 1 ");
//     if(muonXoa== 0){
//         let muonXoa1 = prompt("dien noi dung muon thay vao day");
//         toDoList.splice(0,1);
//         console.log(muonXoa1);
//         console.log("Read document at 12pm");
//     }else if(muonXoa == 1){
//         let muonXoa2 = prompt(" dien noi dung muon thay doi va day");
//         toDoList.splice(1,1);
//         console.log("do homework at 8pm");
//         console.log(muonXoa2);
//     }
// }else if(a1=="E"){
//         console.log("ban da thoat khoi chuong trinh");
// }
//  */

// /* let monAn = ["com", "canh", "thit", "rau", "ca"];
//  monAn.push ('cà');
// monAn.unshift ("rau muong");
// monAn[1]= "cá rán";

// console.log(monAn[2]); 
// let result=monAn.slice(1,2);
// let result1=monAn.slice(4,5);
// let newArray= [];
// newArray.push(result, result1);


// console.log(monAn.pop()); */

// // Ex2:
// // Cho 2 mảng
// let store = ["Chocolate", "Candy", "Cotton Candy", "Marshmellow", "Cookies"];
// let cart = [];
// for(let i=0; i<store.length; i++){
//     console.log(i+1+"."+store[i]);
// }
// // Tạo một ứng dụng mua hàng trong store

// // B1: In ra toàn bộ những những item có trong store
// // Theo dạng 1. Chocolate
// //           2. Candy
// //           3. ....

// // B2: Cho người dùng nhập vào 4 chữ cái C/R/U/D

// // C --- Cho người dùng nhập vào Item có trong store

// let nhap1 = prompt ("nhap mot trong ki tư sau vao day C/R/U/D/");
// if ("nhap1==C"){
//     let cart = prompt("nhập hàng bạn muốn mua vô đây");
//     let a1= (store.includes("cart"))
//     if(a1==true){
//         alert(console.log("ban da mua hang thanh cong"));
//     }else if(a1==false){
//         alert (console.log("đồ bạn muốn mua không có trong store"));
//     } 
//     }
 
// //   --- Tiến hành kiểm tra xem item này có trong store không?
// //       --- Nếu không có thì in ra màn hình "Item is not available"
// //       --- Nếu có thì tiếp tục kiểm tra trong cart
// //          --- Nếu item đã có trong cart rồi
// //              --- Tiến hành tăng số lượng của item lên
// //          --- Nếu item chưa có trong cart
// //              --- Tiến hành cho người dùng nhập vào số lượng
// //              --- Thêm một mảng mới với dạng [item, number] vào trong mảng cart
// //              --- VD: [["Chocolate", 1], ["Cookies", 2]];
// //              --- Tiến hành in ra toàn bộ sản phẩm có trong cart theo dạng
// //              --- 1. Chocolate - 1
// //              --- 2. Cookies - 2

// // R --- In ra toàn bộ những những item có trong store
// //   --- Theo dạng 
// //   --- 1. Chocolate
// //       2. Candy
// //       3. ....
// //   --- In ra toàn bộ những những item có trong cart
// //   --- Theo dạng 
// //   --- 1. Chocolate - 1
// //       2. Cookies - 2
// //       3. ....

// // U --- Hỏi người dùng vị trí của item muốn update số lượng
// //   --- có trong cart
// //   --- Tiến hành kiểm tra xem item đó đã có trong cart chưa
// //   --- Nếu chưa có thì in ra "Item is not in cart"
// //   --- Nếu có thì tiến hành cho người dùng nhập số lượng mới
// //   --- của item vào
// //   --- In ra toàn bộ những những item có trong cart
// //   --- Theo dạng 
// //   --- 1. Chocolate - 1
// //       2. Cookies - 2
// //       3. ....
// // D --- Hỏi người dùng vị trí của item muốn xoá khỏi cart
// //   --- Tiến hành kiểm tra xem item đó đã có trong cart chưa
// //   --- Nếu chưa có thì in ra "Item is not in cart"
// //   --- Nếu có thì tiến hành xoá phần tử khỏi mảng cart
// //   --- In ra toàn bộ những những item có trong cart
// //   --- Theo dạng 
// //   --- 1. Chocolate - 1
// //       2. Cookies - 2
// //       3. ....

// // E --- Biến chương trình thành một vòng lặp vĩnh cửu cho đến
// //   --- khi nào người dùng nhập vào chữ cái E
// //   --- In ra toàn bộ những những item có trong cart
// //   --- Theo dạng 
// //   --- 1. Chocolate - 1
// //       2. Cookies - 2
// //       3. ....
// //   --- Sau đó in ra câu "Thank you for purchasing" và thoát chương trình
//ex3
let pets = ["cat","dog", "pig", "chiken", "hen", "cat", " cat", "hen", "hen"];
 console.log(pets.splice(5,4));

 //ex4
 /* let a= [2,3,4,7,8,0,14,16,18,19,1,245,67,28,58];
 for(let i =0; i<a.length; i++){
   for(let j= i+1; j<a.length; j++){
      if ( a[i]>a[j]){
         let tg = a[i]
         a[i] = a[j]
         a[j] = tg
      }
   }
 }console.log(a);
 */
//ex5
let names=  ["Út", "Diễm","Nguyên"];
names.push("Ngan");
names.unshift("Duong");
names[0]= "Mai";
names.splice(4,1);




//ex7
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

//ex4
 let arr=[1,8,8,55,99,77,77,66,105];
for(let i= 0; i<arr.length; i++){
   for(let j= i+1; j<arr.length; j++){
      if (arr[i]>arr[j]){
         let tg = arr[i];
         arr[i] = arr[j];
         arr[j] = tg;
      }
      }
   }console.log(arr);


