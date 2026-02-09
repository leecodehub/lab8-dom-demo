const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const output = document.getElementById('output');
//Query Selector
const description = document.querySelector('#description');
const button = document.querySelector('#btnClick');

button.addEventListener('click', () => {
    button.textContent = 'Clicked!';

    //visual proof of clicked

    //get input values
    let name = nameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;
    //display output
    output.innerHTML = `<h2>Button Clicked!</h2>`;

    //conditional statement
    if (age == 18) {
        output.innerHTML += `<pWelcome ${name}, you are now an adult! loose</p>`;
    }

    else{
        output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
    }

    if(age === '18') {
        output.innerHTML += `<pWelcome ${name}, you are now an adult! strict</p>`;
    }

    else{
        output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
    }

    if(name !== "" && age !== "" && email !== "") {
        output.innerHTML += `<p>Hi ${name}, I am ${age} years old and my email is ${email}!</p>`;
    }
    else {
        output.innerHTML += `Please fill in all fields.`;
    }
    
})

