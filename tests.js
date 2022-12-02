//- 1. Дан массив`['js', 'css', 'html']`.Выведите на экран первый элемент.

let frontEnd = ['js', 'css', 'html'];
alert(frontEnd[0]);

//- 2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` 
//от нежелательных значений, таких как`false`, `undefined`, пустые строки, `0`, `null` с помощью метода`filter`.
//Ожидаемый результат: `[1, 2, 3]`.

let items = [0, 1, false, 2, undefined, '', 3, null];
let result = items.filter(function (elem) {
    if (elem > 0) {
        return true;
    }
});
console.log(result);


//- 3. Дан массив`[[1,2], [1,2,3], [1,2,3,4]]`.Найдите индекс массива, длина которого`> 3`.
//Ожидаемый результат: `2`

let array = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];
function checkLength(array) {
    return array.length > 3
};
array.findIndex(checkLength);


