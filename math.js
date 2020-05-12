function calculate(left, right, operation) {
    switch(operation) {
        case 1:
           return left + right; 
        case 2:
           return left - right; 
        case 3:
           return left * right; 
        case 4:
           return left / right; 
    }
}

(function setup() {
    const dict = {1:"+", 2:"-", 3:"*", 4:"/"};
     
    window.setInterval(() => {
        let opSelector = Math.floor(Math.random() * 4) + 1;
        let right;
        let left;
        
        if(opSelector < 3) {
            left = Math.floor(Math.random() * 100) + 2;
            right = Math.floor(Math.random() * left) + 1; 
        } else {
            right = Math.floor(Math.random() * 13) + 2;
            left = right * (Math.floor(Math.random() * 13) + 2);
        }

        let correctVal = calculate(left,right,opSelector)

        let stmt = left + dict[opSelector] + right + correctVal;
        document.querySelector('.game').innerText = stmt;
    }, 1000);

}());