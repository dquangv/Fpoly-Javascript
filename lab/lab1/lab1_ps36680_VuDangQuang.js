/*
    Bài 1: Hãy cho biết  sự khác nhau của 3 cách khai báo biến var, let, const dựa trên 4 khía cạnh
- Scope (phạm vi)
- Hoisting (khai báo đưa lên đầu scope)
- Reassign (có thể gán giá trị mới SAU khi khai báo)
- Redeclare (khai báo lại)

- Scope
+ var:
nếu biến được khai báo bên ngoài function thì có phạm vi global (dùng ở đâu cũng được).
nếu biến được khai báo bên trong function thì có phạm vi function (chỉ dùng được bên trong function).
+ let và const:
phạm vi của biến let và const là block (trong ngoặc nhọn {}).

- Hoisting
+ var:
biến var được đẩy lên đầu scope và được khởi tạo với giá trị là undefined.
+ let và const:
biến let và const được đẩy lên đầu nhưng không được khởi tạo nên sẽ báo lỗi.

- Reassign
+ var và let:
có thể gán lại giá trị cho biến đã khai báo.
+ const:
không thể gán lại giá trị cho biến đã khai báo.

- Redeclare
+ var:
có thể khai báo lại biến đã khai báo
+ let và const:
không thể khai báo lại biến đã khai báo



    Bài 2: Xem xét mỗi đoạn code sau, cho biết code chạy được hay báo lỗi (và lỗi gì).

a)
console.log(x) chạy được vì biến var có tính chất hoisting.
console.log(y) báo lỗi vì biến let không được tự động khai báo trước như var.

b) 
code chạy bình thường vì x và y đều là kiểu dữ liệu số và nằm trong cùng một phạm vi.

c)
console.log(y) chạy được và cho ra kết quả NaN.
biến var x được khai báo và gán giá trị sau khi thực hiện phép tính nhưng nhờ tính chất hoisting, x được đẩy lên trước và khai báo với giá trị là undefined, khi cộng undefined với giá trị khác thì kết quả là NaN (Not a number).

d)
code chạy được.
tương tự như câu b, x và y đều là kiểu dữ liệu số và nằm trong cùng một phạm vi nên có thể thực hiện phép tính đúng như mong đợi, biến var có thể được khai báo lại trong cùng phạm vi (scope) và vẫn giữ giá trị hiện tại, do đó "var x = x + y" khai báo lại biến x và gán giá trị bằng tổng của giá trị hiện tại của x (1) và y (2).

e)
code báo lỗi.
biến y được khai báo với từ khoá let nên không thể khai báo lại.
*/



/*
    Bài 3: hãy viết các câu lệnh thực hiện các yêu cầu sau: (nếu có nhiều cách viết thì chọn 1 cách và ghi ra)
a) Chuyển số nguyên 3 thành chuỗi “3”
b) Chuyển chuỗi số “3.14” thành số 3.14
c) Chuyển số nguyên 79623 thành chuỗi, và biễu diễn ở dạng nhị phân (bin), thập lục phân (hex)
d) Chuyển biến x có kiểu số sang kiểu chuỗi KHÔNG dùng hàm.
e) Chuyển biến x có kiểu chuỗi sang kiểu số KHÔNG dùng hàm.
*/

//câu a
let number = 3;
console.log(number.toString());
console.log(typeof number.toString());

//câu b
let str = "3.14";
console.log(Number(str));
console.log(typeof Number(str));

//câu c
let number2 = 79623;
console.log(number2.toString(2));
console.log(typeof number2.toString(2));

console.log(number2.toString(16));
console.log(typeof number2.toString(16));

//câu d
let x = 7;
let str1 = x + '';
console.log(str1);
console.log(typeof str1);

//câu e
let str2 = "3.14";
let number3 = +str2;
console.log(number3);
console.log(typeof number3);


/*
    Bài 4: viết chương trình cho phép người dùng nhập 4 thông tin: họ, tên, giới tính, tuổi. In các thông tin như dạng sau: “Tôi là (họ) (tên), giới tính (giới tính), năm nay tôi (tuổi) tuổi”
Ví dụ: “Tôi là Peter Parker, giới tính nam, năm nay tôi 18 tuổi”
*/

let lastName = prompt('Your Last Name');
let firstname = prompt('Your First Name');
let gender = prompt('Your Gender');
let age = prompt('Your Age');

alert(`Tôi là ${lastName} ${firstname}, giới tính ${gender}, năm nay tôi ${age} tuổi`);
console.log(`Tôi là ${lastName} ${firstname}, giới tính ${gender}, năm nay tôi ${age} tuổi`);