function generateCompPick() {
    const comp = Math.random();
    if(comp <  0.34) {
        return 'gajah';
    }

    if(comp >= 0.34 && comp < 0.67) {
        return 'orang';
    }
    
    return 'semut';
}

/* spin image dr computer agar seolah-olah berpikir sebelum 
memilih hasil dari randomPick() */
function randomPick() {
    const imgComp = document.querySelector('.img-komputer');
    const pics = ["gajah", "orang", "semut"];
    const start = new Date().getTime();

    /* setiap 0.1 detik ganti gambar dan kalau sudah 1 
    detik get gambar dengan menggunakan timing events */
    let i = 0;
    setInterval(function () {
        if(new Date().getTime() - start > 1000) {
            clearInterval();
            return;
        }
        
        imgComp.setAttribute('src', 'img/' + pics[i++] + '.png');
        if(i == pics.length) {
            i = 0;
        }
    }, 100);
}


function getResult(comp, player) {
    if(player == comp) {
        return "SERI";
    }
    
    if(player == 'gajah') {
        return (comp == "orang") ? "MENANG" : "KALAH";
    }
    
    if(player == "orang") {
        return (comp == "semut") ? "MENANG" : "KALAH";
    }

    if(player == "semut") {
        return (comp == "gajah") ? "MENANG" : "KALAH";
    }
}

const opt = document.querySelectorAll('li img');
opt.forEach(function (option) {
    option.addEventListener('click', function () {
        const compPick = generateCompPick();
        const playerPick = option.className;
        const res = getResult(compPick, playerPick);
        
        randomPick();

        setTimeout(() => {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + compPick + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = res;
        }, 1000);
        
    });
});

// const gajah = document.querySelector('.gajah');
// gajah.addEventListener('click', function () {
//     const compPick = generateCompPick();
//     const playerPick = gajah.className;
    
//     const res = getResult(compPick, playerPick);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + compPick + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = res;
// });