let menuBtm = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.querySelector("#title"),
    adv = document.querySelector(".adv"),
    column = document.querySelectorAll(".column")[1],
    text = document.querySelector("#prompt");
    

    menu.insertBefore(menuBtm[2], menuBtm[1]);
    menu.appendChild(li);
    li.classList.add('menu-item');
    li.innerHTML = 'Пятый пункт';
    document.body.style.backgroundImage = " url(img/apple_true.jpg)";
    title.textContent = 'Мы продаем только подлинную технику Apple';
    column.removeChild(adv);
    text.textContent = prompt('Ваше отношение к технике Apple?');

    

console.log(column);