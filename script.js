const submitbutton = document.querySelector("button")
const pass = document.getElementById('pass')
const passValidate = document.getElementById('confpass')
const inputError = document.querySelector('.input-error')

let submitbtndisabled = false;

function validatePassword(){
    if(pass.value != passValidate){
        inputError.style.visibility = 'visible'
        passValidate.setCustomValidity('Improper Input value')
        passValidate.setAttribute('invalid')
        submitbutton.setAttribute('disabled',true)
    }
    else{
        inputError.style.visibility = 'hidden'
        passValidate.setCustomValidity = ('')
        submitbtndisabled.removeAttribute('disabled')
        submitbtndisabled = false
    }

    passValidate.addEventListener('input',validatePassword)
    passInput.addEventListener('input',validatePassword)
}