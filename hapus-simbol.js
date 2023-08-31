function hapusSimbol(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const simbol = str[i];
        if ((simbol >= 'a' && simbol <= 'z') || (simbol >= '0' && simbol <= '9')) {
            result += simbol;
        }
    }

    return result;
}

console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
