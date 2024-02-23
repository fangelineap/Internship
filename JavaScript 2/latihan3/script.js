const container = document.querySelector('.container');
const xlImage = document.querySelector('.xl');
const thumbnails = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
    if(e.target.className == 'thumb') {
        xlImage.src = e.target.src;
        
        thumbnails.forEach(thumb => {
            if(thumb.src != e.target.src) {
                thumb.classList.remove('active');
            }
        });
        e.target.classList.add('active');

        xlImage.classList.add('fade');
        setTimeout(function () {
            xlImage.classList.remove('fade');
        }, 500);
    }
});