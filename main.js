// to get all inputs of document

const controls = document.querySelectorAll('.controls input')


// now listen for an change event

//data-sizing we added in html is just an extra attribute to use in JS for further functions
function Update() {
    console.log(this.value);
    console.log(this.dataset);
    // here we are accessing our extra attribute
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

controls.forEach(input => input.addEventListener('change', Update));
controls.forEach(input => input.addEventListener('mousemove', Update));