const naruciDugme = document.querySelector('button');

function proveriIme () {
    const ime = document.querySelector("#ime").value;
    const regEx = /.+/;
    if (regEx.test(ime)) {
        localStorage.setItem('ime', ime);
        proveriPrezime();
    } else {
        alert('Ime nije ispravano');
    }
}

function proveriPrezime () {
    const prezime = document.querySelector("#prezime").value;
    const regEx = /.+/;
    if (regEx.test(prezime)) {
        localStorage.setItem('prezime', prezime);
        proveriAdresu();
    } else {
        alert('Prezime nije ispravano');
    }
}

function proveriAdresu () {
    const adresa = document.querySelector("#adresa").value;
    const regEx = /.+/;
    if (regEx.test(adresa)) {
        localStorage.setItem('adresa', adresa);
        proveriJMBG();
    } else {
        alert('Adresa nije ispravana');
    }
}

function proveriJMBG () {
    const jmbg = document.querySelector("#jmbg").value;
    const regEx = /^\d{11}10$/
    if (regEx.test(jmbg)) {
        localStorage.setItem('jmbg', jmbg)
        sacuvajKategoriju()
    } else {
        alert('JMBG nije ispravan');
    }
}

function sacuvajKategoriju () {
    const kategorije = document.getElementsByName('kategorija');
            for(let kategorija of kategorije) {
                if(kategorija.checked) {
                    localStorage.setItem('kategorija', kategorija.value);
                    sacuvajRate();
                }
            }
}

function sacuvajRate () {
    const rate = document.querySelector('#rate').value;
    localStorage.setItem('rate', rate);
}



naruciDugme.addEventListener('click', function (event) {
    event.preventDefault();
    proveriIme();
    window.location.href = 'potvrda.html';
})

