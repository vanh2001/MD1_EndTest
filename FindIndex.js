//Cách 1:
function findIndex(arr ,a) {
    // a = +prompt('Mời bạn nhập giá trị: ');
    let array = '';
    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]){
            array = 'Phần tử: ' + arr[i] + ' nằm ở vị trí: ' +i +' trong mảng';
        }
    }
    if (array == 0){
        return alert('Không có phần tử nào!')
    }else {
        return alert(array);
    }
}
findIndex([1,2,3,4,5,6,7,8,9],5);

//Cách 2:
function findIndex2() {
    console.log(arr.includes(2)) ? alert('Đã tìm thấy phần tử trong mảng') : alert('Không tìm thấy ');
}
// findIndex2();

