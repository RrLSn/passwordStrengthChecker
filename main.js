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
    return i
}

// selector 
const container = document.querySelector('.container')
const inputEl = document.querySelector('input')

inputEl.setAttribute('id', 'myPassword')

document.addEventListener(
    'keyup',
    (e) => {
        let password = strength(password)
    }
)