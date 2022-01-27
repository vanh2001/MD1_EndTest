let arr = ['a', 'o', 'g', 'h', 'e'];
function findVowel() {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'o' || arr[i] === 'e' || arr[i] === 'u' || arr[i] === 'i'){
            count += 1;
        }
    }
    alert('Tổng số nguyên âm trong mảng: ' + count);
}
findVowel();