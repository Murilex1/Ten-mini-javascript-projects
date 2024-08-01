const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    if (name.value !== '' && height !== '' && weight !== '') {
        const imc = (weight/(height*height)).toFixed(2);        
    
        let resultIMC = '';
        if (imc >= 18.50 && imc <= 24.9){
            resultIMC = `Hello ${name}! \n Your IMC is normal! \n IMC: ${imc}`;             
        } else if (imc >= 25 && imc <= 29.9) {
            resultIMC = `Hello ${name}! \n Your are overweight! \n IMC: ${imc}`;
        } else if (imc >= 30 && imc <= 39.9){
            resultIMC = `Hello ${name}! \n Your are obesity! \n IMC: ${imc}`
        } else if (imc >= 40) {
            resultIMC = `Hello ${name}! \n Your are severe obesity! \n IMC: ${imc}`
        }else {
            resultIMC =`Hello ${name}! \n You are underweight! \n IMC: ${imc}`
        }

        result.textContent = resultIMC;
    } else {
        result.textContent = 'Fill in all fields!'
    }
}

calculate.addEventListener('click', imc);