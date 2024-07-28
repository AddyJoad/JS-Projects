const form = document.querySelector('form')

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const resultTwo = document.querySelector('#resultTwo')

    if(height === '' ||height < 0 || isNaN(height) ){
        results.innerHTML = `Please give a Valid Height ${height}`;
    }else if(weight === '' ||weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please give a Valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    if(bmi<18.6){
        resultTwo.innerHTML = `<span>Your BMI is Under weight</span>`;
    }else if(bmi>18.6 && bmi<24.9){
        resultTwo.innerHTML = `<span>Your BMI is Normal</span>`;
    }else{
        resultTwo.innerHTML = `<span>your BMI Is OverWeight</span>`;
    }
}
})
