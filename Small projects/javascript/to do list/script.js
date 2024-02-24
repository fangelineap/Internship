const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

checkboxes.forEach(cbox => {
    cbox.addEventListener('click', function (e) {
        let inBetween = false;
        //kalau dia hold shift key dan checking key (bukan uncheck)
        if(e.shiftKey && this.checked) {
            checkboxes.forEach(checkbox => {
                console.log(checkbox);
                if(checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                    console.log('In Between');
                }

                if(inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    });
});