const strength = (password) => {
    let i = 0
    if(password.length >= 4){
        i++
    }
    if(password.length >= 8){
        i++
    }
    if(password.length >= 10){
        i++
    }
    if(/[A-Z]/.test(password)){
        i++
    }
    if(/[0-9]/.test(password)){
        i++
    }
    if(/[A-Za-z0-9]/.test(password)){
        i++
    }
    if(/[!@#$%^&*()'+_=.,;/<>?":]/.test(password)){
        i++
    }
    return i
}

// selector 
const container = document.querySelector('.container')
const inputEl = document.querySelector('input')
const showEl = document.querySelector('.show')

document.addEventListener(
    'keyup',
    (e) => {
        let password = document.querySelector('#myPassword').value
        let passStrength = strength(password)
        if(passStrength <= 2){
            container.classList.add('weak')
            container.classList.remove('medium')
            container.classList.remove('strong')
        }else if (passStrength > 2 && passStrength <= 4){
            container.classList.remove('weak')
            container.classList.add('medium')
            container.classList.remove('strong')
        } else{
            container.classList.remove('weak')
            container.classList.remove('medium')
            container.classList.add('strong')
        }
    }
)


showEl.onclick = function () {
    if(inputEl.type === 'password'){
        inputEl.setAttribute('type', 'text')
        showEl.classList.add('hide')
        showEl.textContent = 'HIDE'
    } else{
        inputEl.setAttribute('type','password')
        showEl.classList.remove('hide')
        showEl.textContent = 'SHOW'
    }
}