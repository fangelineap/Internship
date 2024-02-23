/*==========================CHANGE BACKGROUND WHEN A BUTTON IS PRESSED========================*/
const changeBgBtn = document.getElementById('change-bg-btn');
changeBgBtn.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'change-bg');
    document.body.classList.toggle('change-bg');
});


/*==========================CHANGE BACKGROUND WITH RANDOM RGB VALUE========================*/
const newBtn = document.createElement('button');
const btnText = document.createTextNode('Click here');
newBtn.appendChild(btnText);
newBtn.setAttribute('type', 'button');
// displaynya lgsg inline
changeBgBtn.after(newBtn);

newBtn.addEventListener('click', function () {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});



/*====================CHANGE BACKGROUND WITH SLIDER TO DETERMINE RGB VALUE=================*/
const redSlider = document.querySelector('input[name=redSlider]');
const greenSlider = document.querySelector('input[name=greenSlider]');
const blueSlider = document.querySelector('input[name=blueSlider]');

/* change membuat elemen dicatat mengalami perubahan jika mouse pada slider sudah diangkat
input akan secara real time mengupdate value dari slider sesuai dengan pergerakan */
redSlider.addEventListener('input', function () {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
});

greenSlider.addEventListener('input', function () {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
});


blueSlider.addEventListener('input', function () {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
});





/*====================CHANGE BACKGROUND WITH CURSOR MOVEMENT=================*/
document.body.addEventListener('mousemove', function (event) {
    // clientX dan clientY untuk mendapatkan koordinat cursor pada body html
    // window.innerWidth & innerHeight mengukur window
    const xPos = Math.round((event.clientX / window.innerWidth) * 255 + 1);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255 + 1);

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 255)`;
});