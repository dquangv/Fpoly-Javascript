let num = +prompt('Nhap so luong phan tu cho mang');
let array = new Array(num);

for (let i = 0; i < num; i++) {
    array[i] = +prompt('nhap so bat ki cho phan tu ' + (i + 1));
}

//cau a

// array.sort((a, b) => a - b);

// let min = array[0];
// let max = array[num - 1];
// let sum = min + max;

// console.log(array);
// console.log(`tong cua so lon nhat ${max} va so nho nhat ${min} la ${sum}`);


//cau b
function sortArrayWithAlternatingOddEven(arr) {
    // Sắp xếp mảng ban đầu
    arr.sort((a, b) => a - b);

    let oddCount = arr.filter(num => num % 2 === 1).length;
    let evenCount = arr.length - oddCount;

    let result = [];
    let oddIndex = 0;
    let evenIndex = 0;

    // Tạo mảng xen kẽ và đẩy các phần tử dư xuống cuối
    for (let i = 0; i < arr.length; i++) {
        if ((oddCount >= evenCount && arr[i] % 2 === 1) || oddIndex >= oddCount) {
            result.push(arr[i]);
            evenIndex++;
        } else {
            result.splice(oddIndex * 2, 0, arr[i]);
            oddIndex++;
        }
    }

    return result;
}


let sortedArray = sortArrayWithAlternatingOddEven(array);

console.log(sortedArray);
