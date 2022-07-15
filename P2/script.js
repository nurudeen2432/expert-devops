const theme = localStorage.getItem('theme');
if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

const themeDot = document.getElementsByClassName('theme-option');

for (let i = 0; i < themeDot.length; i++){
    themeDot[i].addEventListener('click', function (){
        let mode = this.dataset.mode;
        console.log("option clicked: ", mode);
        setTheme(mode);
    })
}
function setTheme(mode) {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'intext.css';
    }
    if (mode === 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }
    if (mode === 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }
    if (mode === 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }
    localStorage.setItem('theme', mode);
}