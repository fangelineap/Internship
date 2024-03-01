$('.search-button').on('click', function () {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=769bff8&s=" + $('.input-keyword').val(),
        success: (result) => {
            const movies = result.Search;
            let cards = "";
            movies.forEach((m) => {
                cards += showCards(m);
            });
    
            // menggunakan jquery untuk mencari element dan isi html diganti cards
            $('.movie-container').html(cards);
            console.log(movies);
    
            // ketika detail button diklik
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=769bff8&i=` + $(this).data('imdbid'),
                    success: m => {
                        console.log(m);
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: (err) => {
                        console.log(err.responseText);
                    }
                });
            })
        },
        error: (err) => {
            console.log(err.responseText);
        }
    });
});



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