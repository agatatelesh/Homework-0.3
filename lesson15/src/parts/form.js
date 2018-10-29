function form() {
    let massage = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'

    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactForm = document.querySelector('form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessege = document.createElement('div');

        statusMessege.classList.add('status');
       

    function getForm(a,b) {
        a.addEventListener('submit', function(event) {
            event.preventDefault();
            a.appendChild(statusMessege);
            let formData = new FormData(a,b);
            
            function postData(data) {
                return new Promise(function(resolve,reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function(){
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };
                    request.send(data);
                });
                
            }
            function clearInput() {                
            for (let i = 0; i < b.length; i++) {
                b[i].value = '';
            }
        }
        
        postData(formData)
            .then(()=> statusMessege.innerHTML = massage.loading)
            .then(()=> statusMessege.innerHTML = massage.success)    
            .catch(()=> statusMessege.innerHTML = massage.failure)
            .then(clearInput);    
                
        });
    }
    getForm(form,input);
    getForm(contactForm,contactInput);
}
module.exports = form;
