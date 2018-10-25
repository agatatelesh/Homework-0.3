window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for( let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // timer
    let deadLine = '2018-10-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60).toString(),
            minutes = Math.floor((t/1000/60) % 60).toString(),
            hours = Math.floor((t/(1000*60*60))).toString();

            if (hours.length < 2) {
                hours = "0" + hours;
            }
            if (minutes.length < 2) {
                minutes = "0" + minutes;
            }
            if (seconds.length < 2) {
                seconds = "0" + seconds;
            }

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
             if (t.total <= 0) {                 
                 clearInterval(timeInterval);
                 hours.textContent = '00';
                 minutes.textContent = '00';
                 seconds.textContent = '00';
             }
        }

    }
      setClock('timer', deadLine);

      //Modal 
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
});