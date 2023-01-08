const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const button = document.querySelectorAll('.span-requiredd');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();

    console.log('valid')
});




function setError(index){
    spans[index].style.display = 'block';
    button[index].style.display = 'block';
    
}

function removeError(index){
    spans[index].style.display = '';
    button[index].style.display = '';
    

}

function nameValidate(){
    if(campos [0].value.length < 5){
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }else {
        removeError(1);
    }
}

function error(){
    if(campos){
        error();
    }else {
        removeError();
    }
}


