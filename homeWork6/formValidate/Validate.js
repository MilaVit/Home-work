window.addEventListener('load', function() {
    const form = document.querySelector('#form1');
    const user = form.querySelector('#user');
    const email = form.querySelector('#email');
    const zip = form.querySelector('#zip');
    user.addEventListener('change', getElem);
    email.addEventListener('change', getElem);
    zip.addEventListener('change', getElem);

    let validate = function(elem, pattern) {
        let result = pattern.test(elem.value);
        (result === false) ? elem.className = 'invalid' : elem.className = 'valid'; 
    }

    user.addEventListener('change', function() {
        let pattern = /\S/;
        validate(this, pattern);
    })

    email.addEventListener('change', function() { 
        let pattern = /\b[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    })

    zip.addEventListener('change', function() {
        let pattern = /\d{5}/;
        validate(this, pattern);
    })

    form.addEventListener('submit', function(e) {
        for(let i = 0; i < form.length; i++) {
        let elem = form.elements[i];

        if (elem.className === "valid") valid = true;

        if (elem.className === 'invalid') {
            alert("Допущены ошибки при заполнении формы.");
            e.preventDefault();
            return false;
        } 
        } 
    })
}) 
   