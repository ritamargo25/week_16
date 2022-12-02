/*1. Напишите функцию `sumInput()`, которая:
    - Просит пользователя ввести значения, используя текстовое поле `input` и сохраняет их в массив
    - Когда пользователь нажмёт кнопку «Готово»
        - Выводит получившийся массив в отсортированном по возрастанию виде
        - Подсчитывает и возвращает сумму элементов массива*/

const input = document.querySelector('.inputNumber')
const oneMoreBtn = document.querySelector('.oneMore')
const doneBtn = document.querySelector('.done')
const error = document.querySelector('.error')
const result = document.querySelector('.result')
const sum = document.querySelector('.sum')


let arr = []

const addOne = () => {
    let number = Number(input.value)
    if (number) {
        arr.push(number)
        console.log(arr);
    } else {
        error.innerHTML = 'Ошибка'
    }
    result.innerHTML = arr
    input.value = ''
}
const getSum = () => {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i]
    }
    sum.innerHTML = res
}

oneMoreBtn.addEventListener('click', addOne)
doneBtn.addEventListener('click', getSum)







/*function sumInput() {
    let numbers = [];
    let a = document.querySelector('.num1');
    let b = document.querySelector('.num2');
    let c = document.querySelector('.num3');
    let d = document.querySelector('.num4');
    numbers.push(a, b, c, d);
    numbers.sort()
    let sum = 0;
    sum = +number;
    return sum;
}
alert(sumInput());*/






