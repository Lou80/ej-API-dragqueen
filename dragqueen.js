const botonAll = document.querySelector('#all');
const botonWinners = document.getElementbyId('winners');

botonWinners.onclick = verGanadoras => {
    fetch('https://www.nokeynoshade.party/api/queens/winners')
    .then( function (res) {
        return res.json();
      } )
        .then(queens => {
            return queens.map(function (q) {
                return `<li>${q.image_url} <span>${q.name}<span><li>`;
                console.log(q);
            })
        })
        .then( function (lis) {
            document.querySelector('ul').innerHTML = lis.join('');
          })
    }