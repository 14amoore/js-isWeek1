interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return 'Hello, ' + person.firstName + '' + person.lastName;
}

let user = {firstName: 'Jane', lastName: 'User'};

const para = document.createElement('P');
para.innerText = greeter(user);
document.body.appendChild(para);