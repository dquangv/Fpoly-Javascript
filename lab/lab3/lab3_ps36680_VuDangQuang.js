/*Bài 1: Tạo mảng a có các phần tử [9, 6, 7, 4, 2, 8, 6, 3, 1, 0, 8].*/
let array = [9, 6, 7, 4, 2, 8, 6, 3, 1, 0, 8];

//In giá trị a.length.
console.log(`Do dai mang: ${array.length}`);

//In giá trị phần tử thứ 6, in giá trị phần tử có chỉ số index là 6.
console.log(
  `Gia tri phan tu thu 6 la: ${array[5]}. Gia tri phan tu co chi so index la 6: ${array[6]}`
);

//Tạo phần tử mới có index là -1, giá trị là 11. In giá trị a.length.
array[-1] = 11;
console.log(`Do dai moi cua mang: ${Object.keys(array).length}`);

//Tạo phần tử mới có index là “Hello”, giá trị là “World”. In mảng a, in giá trị a.length.
array["Hello"] = "World";
console.log(`Do dai moi cua mang: ${Object.keys(array).length}`);

//Thêm phần tử mới có giá trị 22, 33, 44 vào cuối mảng. In mảng.
array.push(22, 33, 44);
console.log(array);

//Thêm phần tử mới có giá trị -22, -33, -44 vào đầu mảng. In mảng.
array.push(-22, -33, -44);
console.log(array);

//Xóa 2 phần tử cuối mảng. In mảng.
array.splice(-2, 2);
console.log(array);

//Xóa 2 phần tử đầu mảng. In mảng.
array.splice(0, 2);
console.log(array);

//Chèn phần tử có giá trị “apple” vào vị trí index 3
array.splice(3, 0, "apple");
console.log(array);

//Chèn các phần tử có giá trị “banana”, “apple”, “orange” vào vị trí index 3. In mảng.
array.splice(3, 0, "banana", "apple", "orange");
console.log(array);

//Xóa phần tử thứ 2 đến phần tử thứ 5.
array.splice(1, 4);
console.log(array);

//Tìm index  cuối cùng của phần tử có giá trị 8.
console.log(array.lastIndexOf(8));

//Tìm index của phần tử  có giá trị “apple”. In chỉ số index.
console.log(array.indexOf("apple"));







/*Bài 2: Cho 1 mảng số nguyên có n phần tử. In ra true nếu có giá trị xuất hiện hơn 1 lần, false nếu ngược lại.*/

//Nhập số lượng phần tử.
let num = +prompt("Enter the number of array");
let array2 = [];
//Tạo đối tượng chứa thuộc tính là các giá trị của mảng, giá trị của thuộc tính là số lần giá trị của mảng xuất hiện.
let count = {};
let loop = false;

for (let i = 0; i < num; i++) {
  value = +prompt(`number ${i + 1}`);
  //Đẩy phần tử mới nhập vào mảng.
  array2.push(value);

  //Nếu đối tượng count đã chứa thuộc tính value (count[value]!==0, tức biểu thức true) thì thêm số lần xuất hiện
  if (count[value]) {
    count[value]++;
  } else {
    //còn chưa xuất hiện lần nào (count[value]===0, tức biểu thức false thì giờ nó xuất hiện 1 lần)
    count[value] = 1;
  }
}

//in đối tượng count để kiểm chứng số lần xuất hiện các giá trị của mảng
console.log(count);

//duyệt đối tượng nếu số lần xuất hiện nhiều hơn 1 lần thì in ra số lần xuất hiện
for (let key in count) {
  if (count[key] > 1) {
    loop = true;
    console.log(`${key} xuất hiện ${count[key]} lần.`);
  } else {
    console.log("Mọi giá trị đều xuất hiện 1 lần.");
  }
}

console.log(loop);







/*Bài 3: Cho 1 mảng số nguyên có n phần tử. Đếm số phần tử lẻ và số phần tử chẵn.*/

let num3 = +prompt("Enter the number of array");
let array3 = [];
let odd = 0,
  even = 0;

for (let i = 0; i < num3; i++) {
  value3 = +prompt(`Number ${i + 1}`);
  array3.push(value3);

  if (value3 % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(array3);
console.log(`Số phần tử lẻ: ${odd}`);
console.log(`Số phần tử chẵn: ${even}`);








/*Bài 4: Cho 1 mảng số nguyên có n phần tử và giá trị K. Viết mã để loại bỏ hết các phần tử mảng có giá trị K.*/

let num4 = +prompt("Enter the number of array");
let kNum = +prompt("Enter number K");
let array4 = [];

for (let i = 0; i < num4; i++) {
  value4 = +prompt(`Number ${i + 1}`);
  array4.push(value4);
}

console.log(`Mảng: ${array4}`);

//Nếu duyệt phần tử từ 0 tăng dần thì sau khi cắt bớt, thứ tự của các phần tử bị thay đổi, do đó một số phần tử sẽ bị bỏ qua mà không xét tới => không loại bỏ hết số K.
for (let i = array4.length - 1; i >= 0; i--) {
  if (array4[i] === kNum) {
    array4.splice(i, 1);
  }
}

console.log(`K = ${kNum}`);
console.log(`Mảng sau khi loại bỏ hết K: ${array4}`);







/*Bài 5: Cho 1 mảng số nguyên có n phần tử. Tính tích của các số chẵn.*/

let num5 = +prompt("Enter the number of array");
let array5 = [];
let multiEven = 1;

for (let i = 0; i < num5; i++) {
  value5 = +prompt(`Number ${i + 1}`);
  array5.push(value5);
  if (value5 % 2 == 0) {
    multiEven *= value5;
  }
}

console.log(array5);
console.log(`Tích các số chẵn trong mảng: ${multiEven}`);








/*Bài 6: Cho số n biểu diễn dưới dạng mảng và số K. Thực hiện phép cộng của n và K.*/

let num6 = +prompt("Enter the number of array");
let array6 = [];
let kNum6 = +prompt("Enter number K");

for (let i = 0; i < num6; i++) {
  value6 = +prompt(`Number ${i + 1}`);
  array6.push(value6);
}

console.log(array6);

for (let i = 0; i < num6; i++) {
  array6[i] += kNum6;
}

console.log(`Mảng sau khi thực hiện phép cộng với số K: ${array6}`);








/*Bài 7: Cho n người trong 1 phòng. Người thứ 1 bắt tay với những người còn lại và đi ra. Sau đó người thứ 2 bắt tay với những người còn lại và đi ra. Tương tự cho đến người cuối cùng. Tổng số cái bắt tay là bao nhiêu ?*/

let num7 = +prompt("Enter the number of people in the room");
console.log(`Số người trong phòng: ${num7}`);
console.log(`Tổng số cái bắt tay là: ${(num7 * (num7 - 1)) / 2}`);







/*Bài 8: Nhập vào số n. In ra các dãy số của tam giác Pascal tới dòng n. Bài này không bắt buộc làm, nếu làm được thì có điểm cộng.*/

let num8 = +prompt("Enter the number of rows of Pascal's triangle");
let array8 = [];

for (let i = 0; i < num8; i++) {
    //Tạo mảng 2 chiều chứa các dòng của tam giác
    array8[i] = [];

    //giá trị phần tử đầu tiên của mỗi hàng luôn là 1
    array8[i][0] = 1;

    //chạy vòng lặp tính giá trị cho các cột của mỗi hàng, j < i (chạy đến phần tử kế cuối)
    for (let j = 1; j < i; j++) {
        array8[i][j] = array8[i - 1][j] + array8[i - 1][j - 1];
    }

    //giá trị phần tử cuối của mỗi hàng cũng là 1
    array8[i][i] = 1;
}

console.log(array8);