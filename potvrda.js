function popuniTabelu () {
    document.querySelector('#potvrda-ime').innerText = localStorage.getItem('ime');
    document.querySelector('#potvrda-prezime').innerText = localStorage.getItem('prezime');
    document.querySelector('#potvrda-adresa').innerText = localStorage.getItem('adresa');
    document.querySelector('#potvrda-jmbg').innerText = localStorage.getItem('jmbg');
    document.querySelector('#potvrda-kategorija').innerText = localStorage.getItem('kategorija');
    document.querySelector('#ukupna-cena').innerText = ukupnaCena() + " din";    
    document.querySelector('#potvrda-rate').innerText = localStorage.getItem('rate');
    document.querySelector('#iznos-rate').innerText = Math.round(ukupnaCena() / localStorage.getItem('rate')) + " din";
}

function ukupnaCena () {
    const kategorija = localStorage.getItem('kategorija');
    if(kategorija === 'a') {
        return 40000
    } else if (kategorija === 'b') {
        return 80000
    } else if (kategorija === 'c') {
        return 100000
    }
}


window.onload = function() {
    popuniTabelu();
  };