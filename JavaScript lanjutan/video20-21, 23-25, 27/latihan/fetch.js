/* =====SEBELUM REFACTOR===== */


// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {

//     const keyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=769bff8&s=' + keyword.value)
//     .then(res => res.json())
//     .then(res => {
//         const movies = res.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));

//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         // ketika tombol detail diklik
//         const detailBtn = document.querySelectorAll('.modal-detail-button');
//         detailBtn.forEach(btn => {
//             btn.addEventListener('click', function () {
//                 const imdb = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=769bff8&i=' + imdb)
//                 .then(res => res.json())
//                 .then(res => {
//                     const movieDetail = showMovieDetail(res);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 })
//             });
//         });
//     });
// });



/* =====SETELAH REFACTOR===== */
const searchbtn = document.querySelector(".search-button");
searchbtn.addEventListener("click", async function () {
    const key = document.querySelector(".input-keyword");
    
    // akan berisi object yang berisi data
    // await untuk kasitau bahwa harus tunggu resolve dulu
    try {
        const movies = await getMovies(key.value);
        console.log(movies);
    
        updateUI(movies);
    } catch (error) {
        alert(error);
    }
});

// event binding -> agar elemen yang belum ada dapat diberikan event
document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("modal-detail-button")) {
        const imdbid = e.target.dataset.imdbid;
        const mDetail = await getMovieDetail(imdbid);
        updateDetail(mDetail);
    }
});

function getMovieDetail(detail) {
    return fetch("http://www.omdbapi.com/?apikey=769bff8&i=" + detail)
        .then((res) => res.json())
        .then((res) => res);
}

function updateDetail(detail) {
    const modalBody = document.querySelector('.modal-body');
    let movie = showMovieDetail(detail);
    modalBody.innerHTML = movie;
}

function getMovies(key) {
    return fetch("http://www.omdbapi.com/?apikey=769bff8&s=" + key)
        .then((res) => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((res) => {
            if(res.Response === "False") {
                throw new Error(res.Error);
            }
            return res.Search;
        });
}

function updateUI(movies) {
    let cards = "";
    movies.forEach((m) => (cards += showCards(m)));
    const movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = cards;
}

function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" 
                        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director: ${m.Director}</strong></li>
                            <li class="list-group-item"><strong>Actor(s): ${m.Actors}</strong></li>
                            <li class="list-group-item"><strong>Writer: ${m.Writer}</strong></li>
                            <li class="list-group-item"><strong>Plot: </strong> <br> ${m.Plot} </li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
