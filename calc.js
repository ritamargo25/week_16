const brands = document.querySelector('#brands')
const models = document.querySelector('#models')
const result = document.querySelector('.result')

let audiModels = ['a1', 'a2', 'tt', 'q3']

const selectBrand = () => {
    if (brands.value == '0') {
        models.style.display = 'none'
    } else {
        models.style.display = 'block'
    }

    let options = ''
    if (brands.value == '300') {
        for (let model of audiModels) {
            options += `<option value='1000'>${model}</option>`
        }
    }
    models.innerHTML = options
}

const getSum = () => {
    result.innerHTML = `стоимость: ${+brands.value + +models.value}`
}
