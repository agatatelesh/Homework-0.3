function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        desBtn = document.querySelectorAll('.description-btn'),
        infoGlob = document.querySelector('.info'),
        body = document.querySelector('body');

    more.addEventListener('click', function() {
        openMore();
    });
    close.addEventListener('click', function() {
        closeMore();
    });
    for (let i = 0; i < desBtn.length; i++) {
        desBtn[i].addEventListener('click', function() {
            openMore();
        });
    }

    function openMore() {
        overlay.style.display = 'block';
        infoGlob.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    function closeMore() {
        overlay.style.display = 'none';
        infoGlob.classList.remove('more-splash');
        document.body.style.overflow = '';
    }   

} 
module.exports = modal;