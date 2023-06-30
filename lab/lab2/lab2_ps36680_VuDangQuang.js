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
