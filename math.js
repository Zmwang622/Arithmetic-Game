(function setup() {
    window.setInterval(() => {
        let opSelector = Math.floor(Math.random() * 4) + 1;


        let right = Math.floor(Math.random() * 100) + 1;
        let left = Math.floor(Math.random() * 100) + 1;
        let stmt = left + '+' + right
        document.querySelector('.game').innerText = stmt;
    }, 100);

}());