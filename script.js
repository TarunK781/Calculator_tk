let expression = "";
let buttons = document.querySelectorAll('.button');

document.querySelector('input').value = '0'

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            let filter = "";
            for (let i = 0; i < expression.length; i++) {
                if (expression[i] !== ',') {
                    filter += expression[i];
                }
            }
            expression = filter;
            if (expression !== '' && expression !== '0') {
                expression = eval(expression);
                document.querySelector('input').value = expression;
                expression = "";
            } else {
                document.querySelector('input').value = '0';
            }
        } else if (e.target.innerHTML === 'AC') {
            expression = "";
            document.querySelector('input').value = '0';
        } else if (e.target.innerHTML === 'DEL') {
            if (expression.length <= 1) {
                expression = "";
                document.querySelector('input').value = '0';
            } else {
                expression = expression.slice(0, expression.length - 1);
                document.querySelector('input').value = expression;
            }
        } else {
            expression += e.target.innerHTML;
            document.querySelector('input').value = expression;
        }
    });

});
let slider = document.getElementById('mover');

function mcMover() {
    document.body.classList.toggle("dark-theam");
    if (slider.style.transform == 'translateX(30px)') {
        slider.style.transform = 'translateX(0)'
        slider.style.backgroundColor = 'black'
    } else {
        slider.style.backgroundColor = 'sandybrown'
        slider.style.transform = 'translateX(30px)'
    }
}