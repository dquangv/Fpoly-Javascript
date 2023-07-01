/*
Bài 1: hãy liệt kê các phép toán ở các danh mục sau:
a) Số học (ví dụ ‘+’)
b) Quan hệ (ví dụ ‘==’)
c) Logic (ví dụ ‘&&’)

a) Số học
Cộng (+).
Trừ (-).
Nhân (*).
Chia (/).
Chia lấy phần dư (%).
Lũy thừa (**).
"
^ so
~ nghịch bit

b) Quan hệ
Bằng (==).
Không bằng (!=).
Lớn hơn (>).
Nhỏ hơn (<).
Lớn hơn hoặc bằng (>=).
Nhỏ hơn hoặc bằng (<=).
===
!==

c) Logic
Và (&&).
Hoặc (||).
Phủ định (!).



Bài 2: các biểu thức sau cho giá trị true khi a, b và c có giá trị thế nào:
a)   a && b
b)   a || b 
c)   !(a && b) 
d)   !(a || b) 
e)   (a && b) || c 
f)   (a || b) && c 

a) a và b đều true.
b) a hoặc b true.
c) a và b đều false.
d) a và b đều false.
e) c true thì a và b true hay false đều được, c false thì a và b đều phải true.
f) c true, còn a và b thì ít nhất 1 biến có giá trị true.



Bài 3: viết biểu thức xét điều kiện cho các câu sau:
a) Biến a có giá trị lớn 7 hoặc nhỏ hơn -8
b) Biến a có giá trị trong khoảng [-8, 7]
c) Biến a có giá trị là 0 hoặc biến b có giá trị trong khoảng (3, 9)
d) Biến a có giá trị 0 và biến b có giá trị lớn hơn 10 hoặc nhỏ hơn -10

a) (a > 7) || (a < -8)
b) (a >= -8) && (a <= 7)
c) (a === 0) || (b > 3 && b < 9)
d) (a === 0) && (b > 10 || b < -10)
*/



/*
Bài 4: viết chương trình nhập vào 4 số nguyên. In ra message box, tích của 2 số lớn nhất, tổng của 2 số nhỏ nhất.
*/

//initialize 4 variables
let num1 = +prompt('number 1');
let num2 = +prompt('number 2');
let num3 = +prompt('number 3');
let num4 = +prompt('number 4');

//initialize a array containing 4 variables
let array = [num1, num2, num3, num4];

//sort the array by ascending
let asc_array = array.sort((a, b) => a - b);

//calculate the multiplication of 2 maximum values and the sum of 2 minimum values
let multi_max = asc_array[2] * asc_array[3];
let plus_min = asc_array[0] + asc_array[1];

alert(`The multiplication of 2 maximum values ${asc_array[2]} and ${asc_array[3]} is ${multi_max}`);
alert(`The sum of 2 minimum values ${asc_array[0]} and ${asc_array[1]} is ${plus_min}`);



/*
Bài 5: Viết chương trình nhập vào số trong khoảng [1, 12]. In ra message box, số ngày trong tháng. Lưu ý: (1) tháng 2 mặc định có 28 ngày, (2) người dùng BỊ ÉP phải nhập giá trị trong khoảng [1, 12], nếu nhập sai phải nhập lại.
*/

let num = null;

do {
    num = +prompt('Enter a number from 1 to 12 (month of the year)');
} while (num < 1 || num > 12 || isNaN(num));

switch (num) {
    case 2:
        alert(`Number of days in this month is 28`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`Number of days in this month is 30`);
        break;
    default:
        alert(`Number of days in this month is 31`);
        break;
}