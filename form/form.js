let nome = document.getElementById('inome');
let date = document.getElementById('idate');
let phone = document.getElementById('itel');
let profession = document.getElementById('iprofissao');
 
let campos = document.querySelectorAll('.required');
let spans = document.querySelectorAll('.span-required');

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeErro(0);
    }
}

function addCaracteresPhone(){
    if(phone.value.length == 1){
        phone.value = `(${phone.value}`;
    }if(phone.value.length == 3){
        phone.value = `${phone.value})`;
    }if(phone.value.length == 9){
        phone.value = `${phone.value}-`;
    }
}

function phoneValidate(){
    if(campos[2].value.length < 14){
        setError(2);
    }else{
        removeErro(2);
    }
}

function addCaracteresData(){
    if(date.value.length == 2){
        date.value = `${date.value}/`;
    }if(date.value.length == 5){
        date.value = `${date.value}/`
    }
}

function dateValidate(){
    if(campos[1].value.length < 10){
        setError(1);
    }else{
        removeErro(1)
    }
}

function professionValidate(){
    if(campos[3].value.length < 5){
        setError(3);
    }else{
        removeErro(3);
    }
}

