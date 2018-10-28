function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        desBtn = document.querySelectorAll('.description-btn'),
        infoGlob = document.querySelector('.info'),
        body = document.querySelector('body');

    body.addEventListener('click', function(event) {
        let target = event.target;
        if (target.className == "description-btn") {
           openMore(infoGlob);           
        }
        if (target.className == "popup-close") {
            closeMore(this);
        }
        if (target.className == "more") {
            openMore(more);
        }
        console.log(target);
    });

    function openMore(a) {
        overlay.style.display = 'block';
        a.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    function closeMore(b) {
        overlay.style.display = 'none';
        b.classList.remove('more-splash');
        document.body.style.overflow = '';
    }   

} 
module.exports = modal;