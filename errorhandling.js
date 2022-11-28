class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    try {
        if (Number(firstNum) && Number(secondNum)) {
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
        } else {
            throw new ValidationError("Not a valid number!");

        }

    } catch (err) {
        console.log(err);
        output.innerHTML = 'Not a valid number!';
    } finally {
        console.log("Testing");

    }

});


let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here

errorBtns[0].addEventListener('click', () => {
    return console.log('Console Log Pressed!');
});
errorBtns[1].addEventListener('click', () => {
    console.error('Console Error!');
});
errorBtns[2].addEventListener('click', () => {
    console.count('Console Counting!');
});
errorBtns[3].addEventListener('click', () => {
    console.warn('Console Warning!');
});
errorBtns[4].addEventListener('click', () => {

    let result = 'not odd number!';

    for (let i = 0; i < 5; i++) {
        console.assert(i % 2 != 0, {
            i,
            result
        });
    }
});
errorBtns[5].addEventListener('click', () => {
    console.clear();
});
errorBtns[6].addEventListener('click', () => {
    console.dir(document.head);
});
errorBtns[7].addEventListener('click', () => {
    console.dirxml(errorBtns[7]);
});
errorBtns[8].addEventListener('click', () => {
    console.group();
});
errorBtns[9].addEventListener('click', () => {
    console.groupEnd();
});
errorBtns[10].addEventListener('click', () => {

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    const family = {};

    family.mother = new Person("Janet", "Jones");
    family.father = new Person("Tyrone", "Jones");
    family.daughter = new Person("Maria", "Jones");

    console.table(family);
});
errorBtns[11].addEventListener('click', () => {
    console.time();
    console.log('time started')
});
errorBtns[12].addEventListener('click', () => {
    console.timeEnd();
});
errorBtns[13].addEventListener('click', () => {

    const first = () => {
        second();
    };
    const second = () => {
        third();
    };
    const third = () => {
        fourth();
    };
    const fourth = () => {
        console.trace();
    };
    first();

});
errorBtns[14].addEventListener('click', () => {
    throw new Error('A Global Error Has Been Trigger!')
})
window.addEventListener('Error', () => {
    console.log('A Global Error Had Been Found!!!');
})

// You may move this JS to another file if you wish