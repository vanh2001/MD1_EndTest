let arr = [  'g', 'h'];
function findVowel() {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'o' || arr[i] === 'e' || arr[i] === 'u' || arr[i] === 'i'){
            count += 1;
        }else {
            alert('Không có nguyên âm nào')
            break;
        }
    }
    alert('Tổng số nguyên âm trong mảng: ' + count);
}
findVowel();