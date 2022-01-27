let arr = [1,2,3,4,5,6,7,8,9];
function findIndex() {
    let a = +prompt('Mời bạn nhập giá trị: ');
    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i]){
            alert('Phần tử: ' + arr[i] + ' nằm ở vị trí: ' +i +' trong mảng');
            console.log(arr[i]);
            break;
        }
        // else {
        //     alert('Không có phần tử mà bạn đang tìm');
        //     // break;
        // }
    }
}
findIndex();

//Cách 2:
function findIndex2() {
    console.log(arr.includes(2)) ? alert('Đã tìm thấy phần tử trong mảng') : alert('Không tìm thấy ');
}
// findIndex2();

