'use strict'

const usersNames = ['Mike', 'Bob', 'Nicola'];
const users = {};
[users.mike, users.bob, users.nicola] = usersNames;
console.log(users);



const salaries = {
    Mike: 1500,
    Bob: 1800,
    Nicola: 1700,
  };
  
  function maxSalary(salaries) {
    const users = Object.entries(salaries);
    let maxSalary = 0;
    let user = "";
  
    for (const [name, salary] of users) {
      if (salary > maxSalary) {
        maxSalary = salary;
        user = name;
      }
    }
    return console.log(user);
  }
  
  maxSalary(salaries);


const usver = {mike: 'Mike', bob: 'Bob', nicola: 'Nicola'}
let {mike : userMike, bob : userBob, nicola : userNicola} = usver
console.log(userMike, userBob, userNicola);