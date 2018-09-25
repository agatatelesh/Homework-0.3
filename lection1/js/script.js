let name = document.getElementById('name'),
    surname = document.getElementById('surname'),
    age = document.getElementById('age'),
    nameInput = document.getElementsByTagName('input')[0],
    surnameInput = document.getElementsByTagName('input')[1],
    ageInput = document.getElementsByTagName('input')[2];

nameInput.addEventListener('input', function(){
    name.innerHTML = nameInput.value
});
surnameInput.addEventListener('input', function(){
    surname.innerHTML = surnameInput.value
});
ageInput.addEventListener('input', function(){
    age.innerHTML = ageInput.value
 });
let name = document.querySelector('#name'),
    surname = document.querySelector('#surname'),
    age = document.querySelector('#age'),
    input = document.querySelectorAll('input');

function show(a,b) {
    input[a].addEventListener('input', function(){
        b.innerHTML = input[a].value
    });
}
show(0, name);
show(1, surname);
show(2, age);
//Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице

