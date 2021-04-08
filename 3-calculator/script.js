const textarea = document.querySelector('.text-area').firstElementChild;
let button = document.querySelectorAll('button');
let equal = document.querySelector('.equal');

var str = [];


button.forEach(function (buttons) {



    buttons.addEventListener('click', function (e) {



        if (e.target.innerHTML != '=' && e.target.innerHTML != 'Del' && e.target.innerHTML != 'C') {
            str.push(e.target.innerHTML);
            var lst = str.join('');
            textarea.innerHTML = lst;
            console.log(lst);
        } else if (e.target.innerHTML == '=') {
            var strr = eval(textarea.innerHTML);
            textarea.innerHTML = eval(strr);

        } else {
            textarea.innerHTML = '';
        }


        console.log(strr);

    })




})



    /* //Wrap code in an IIFE
    (function () {

        let screen = document.querySelector('.screen');
        let buttons = document.querySelectorAll('.btn');
        let clear = document.querySelector('.btn-clear');
        

        //retrieve data from numbers that are clicked
        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                let value = e.target.dataset.num;
                screen.value += value;
            })
        });

        equal.addEventListener('click', function (e) {
            if (screen.value === '') {
                screen.value = 'Please Enter a Value';
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        })

        clear.addEventListener('click', function (e) {
            screen.value = '';
        })

    })(); //end IIFE */


console.log(button);
console.log(eval('5+8/9'));
console.log(textarea);
